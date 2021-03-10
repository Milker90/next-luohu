const tcb = require("@cloudbase/node-sdk"); // 云开发 SDK
const { JWT } = require("/opt/commonjs/jwt");
const { calScore } = require("/opt/commonjs/calScore");
const { calNianLingLevel } = require("/opt/commonjs/utils");
const { Report } = require("/opt/commonjs/report");

const app = tcb.init({
  env: tcb.SYMBOL_CURRENT_ENV,
});
const db = app.database();
const scoreInputCollection = db.collection("score_input");
const reportCollection = db.collection("report");

const resultMap = (code = 200, msg, data) => {
  return { code, msg, data };
};

exports.main = async (event, context) => {
  const { body } = event;
  const jsonResult = JSON.parse(body);
  app.logger().log(jsonResult);
  let {
    uid,
    token,
    jiuyeMonth,
    zhuSuoMonth,
    jiaoYuLevel,
    jiaoYuSheBaoMonth,
    noUseZhiZhuQuYu,
    workAndJuzhuLevel,
    onlyJuzhuLevel,
    chuangYeChuangXinType,
    chuangYeChuangXinLevel,
    naShuiType,
    naShuiLevel,
    nashuiIllegal,
    birthday,
    rongYuBiaoZhangLevel,
    noShouFaNum,
  } = jsonResult;

  if (uid === undefined || uid === "" || token === undefined || token === "") {
    return resultMap(401, "未登录");
  }

  const info = JWT.verify(token);
  if (!info) {
    return resultMap(401, "token已过期");
  }

  if (info.uid !== uid) {
    return resultMap(401, "用户无权限");
  }

  if (
    jiuyeMonth === undefined ||
    jiaoYuLevel === undefined ||
    zhuSuoMonth === undefined ||
    noUseZhiZhuQuYu === undefined ||
    chuangYeChuangXinType === undefined ||
    naShuiType === undefined ||
    rongYuBiaoZhangLevel === undefined ||
    noShouFaNum === undefined ||
    birthday === undefined
  )
    return resultMap(400, "参数错误");

  if (jiuyeMonth < 84) {
    return resultMap(
      400,
      "未达到积分落户资格要求的连续7年社保，无法为您生成报告"
    );
  }

  if (!jiaoYuSheBaoMonth) jiaoYuSheBaoMonth = 0;

  if (noUseZhiZhuQuYu) {
    if (!workAndJuzhuLevel) workAndJuzhuLevel = 0;
    if (!onlyJuzhuLevel) onlyJuzhuLevel = 0;
  }

  if (!chuangYeChuangXinLevel) chuangYeChuangXinLevel = 0;

  if (!naShuiLevel) naShuiLevel = 0;

  if (!nashuiIllegal) nashuiIllegal = 0;

  // 计算年龄level
  const yearVersion = 2019;
  const nianLingLevel = calNianLingLevel(birthday, yearVersion);
  const scoreInput = {
    uid,
    jiuyeMonth,
    zhuSuoMonth,
    jiaoYuLevel,
    jiaoYuSheBaoMonth,
    noUseZhiZhuQuYu,
    workAndJuzhuLevel,
    onlyJuzhuLevel,
    chuangYeChuangXinType,
    chuangYeChuangXinLevel,
    naShuiType,
    naShuiLevel,
    nashuiIllegal,
    birthday,
    nianLingLevel,
    rongYuBiaoZhangLevel,
    noShouFaNum,
    yearVersion,
    create: new Date(),
  };
  const inputAddRes = await scoreInputCollection.add(scoreInput);

  if (!inputAddRes.id) {
    return resultMap(500, "数据库操作失败");
  }

  // 计算分
  const resultScore = calScore(scoreInput);
  // app.logger().log({ msg: JSON.stringify(resultScore) });

  // 生成报告数据
  const resultReport = Report.create(scoreInput, resultScore);

  const report = {
    uid,
    create: new Date(),
    version: 1,
    modelVersion: "2019",
    data: resultReport,
  };

  // app.logger().log({ msg: "=========报告" });
  // app.logger().log(report);
  // app.logger().log({ msg: JSON.stringify(report) });

  const reportAddRes = await reportCollection.add(report);
  if (!reportAddRes.id) {
    return resultMap(500, "数据库操作失败");
  }

  return resultMap(200, "sucess", reportAddRes.id);
};

// {
// 	"uid": "yvKD3L",
// 	"token": "^R]",
// 	"jiuyeMonth": 100,
// 	"zhuSuoMonth": 27,
// 	"jiaoYuLevel": 3,
// 	"jiaoYuSheBaoMonth": 0,
// 	"noUseZhiZhuQuYu": false,
// 	"workAndJuzhuLevel": 2,
// 	"onlyJuzhuLevel": 1,
// 	"chuangYeChuangXinType": 0,
// 	"chuangYeChuangXinLevel": 0,
// 	"naShuiType": 0,
// 	"naShuiLevel": 0,
// 	"nashuiIllegal": 0,
// 	"nianLingLevel": 0,
// 	"rongYuBiaoZhangLevel": 0,
// 	"noShouFaNum": 0
// }
