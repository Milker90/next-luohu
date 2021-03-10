const tcb = require("@cloudbase/node-sdk"); // 云开发 SDK
const { JWT } = require("/opt/commonjs/jwt");

const app = tcb.init({
  env: tcb.SYMBOL_CURRENT_ENV,
});
const db = app.database();
const reportCollection = db.collection("report");

const resultMap = (code = 200, msg, data) => {
  return { code, msg, data };
};

exports.main = async (event, context) => {
  const { body } = event;
  const jsonResult = JSON.parse(body);

  let { uid, token, reportId } = jsonResult;
  app.logger().log(jsonResult);
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

  let res = null;
  if (reportId === undefined || reportId === "") {
    // 获取用户最新的报告
    res = await reportCollection
      .aggregate()
      .match({ uid })
      .sort({ create: -1 })
      .limit(1)
      .end();

    if (
      res.data === undefined ||
      (Array.prototype.isPrototypeOf(res.data) && res.data.length === 0)
    ) {
      return resultMap(405, "你还没有创建报告");
    }

    // app.logger().log({ msg: "=========获取用户最新的报告" });
    // app.logger().log(res);
    // app.logger().log({ msg: "=========获取用户最新的报告" + reportId });
  } else {
    // res = await reportCollection.where({ _id: reportId, uid }).get();
    res = await reportCollection
      .aggregate()
      .match({ uid, _id: reportId })
      .end();
    if (
      res.data === undefined ||
      (Array.prototype.isPrototypeOf(res.data) && res.data.length === 0)
    ) {
      return resultMap(400, "参数错误");
    }
  }

  return resultMap(200, "success", res.data[0]);
};
