const tcb = require("@cloudbase/node-sdk"); // 云开发 SDK
const axios = require("axios");
const { JWT } = require("/opt/commonjs/jwt");

const appid = "wx79f33d08f90358c2";
const secret = "99d7f87b42198cd9017ba4cffe276c52";

const app = tcb.init({
  env: tcb.SYMBOL_CURRENT_ENV,
});

const db = app.database();
const collection = db.collection("user");

const resultMap = (code = 200, msg, data) => {
  return { code, msg, data };
};

exports.main = async (event, context) => {
  // app.logger().log(event);
  const { body } = event;
  const jsonResult = JSON.parse(body);
  const { code, userInfo } = jsonResult;

  if (
    code === undefined ||
    code === "" ||
    userInfo === undefined ||
    JSON.stringify(userInfo) === "{}"
  ) {
    return resultMap(400, "参数错误");
  }

  // app.logger().log({ code });
  // const {code} = resultMap;
  const resposne = await axios.get(
    "https://api.weixin.qq.com/sns/jscode2session",
    {
      params: {
        js_code: code,
        appid,
        secret,
        grant_type: "authorization_code",
      },
    }
  );

  const { status, data } = resposne;

  if (status !== 200 || data === undefined) {
    return resultMap(400, "请求微信服务器失败");
  }

  const { openid } = data;
  if (openid === undefined || openid === "") {
    return resultMap(400, "请求微信服务器失败");
  }

  const res = await collection.where({ wx_openid: openid }).get();
  // app.logger().log({ msg: "res=======" });
  app.logger().log(res);
  let payload = {};
  if (
    res.data === undefined ||
    (Array.prototype.isPrototypeOf(res.data) && res.data.length === 0)
  ) {
    // 插入新的
    const nUser = await collection.add({
      wx_openid: openid,
      ...userInfo,
      from: "weixin",
    });
    // app.logger().log({ msg: "nUser=======" });
    // app.logger().log(nUser);
    if (nUser.id === undefined || nUser.id === "") {
      return resultMap(500, "数据库操作失败");
    }

    payload["uid"] = nUser.id;
    payload["openid"] = openid;
  } else {
    const docId = res.data[0]["_id"];

    // 更新用户信息
    const updateRes = await collection.doc(docId).update({ ...userInfo });
    app.logger().log(updateRes);
    if (updateRes.updated < 0) {
      return resultMap(500, "数据库操作失败");
    }

    payload["uid"] = docId;
    payload["openid"] = res.data[0]["wx_openid"];
  }

  const { uid } = payload;

  // app.logger().log(payload);
  const token = JWT.generate(payload);

  // app.logger().log({ token });

  return resultMap(200, "sucess", { token, uid });
};

// GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
