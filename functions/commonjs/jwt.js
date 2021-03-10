const jsonwebtoken = require("jsonwebtoken");
const secret = "d41d8cd98f00b204e9800998ecf8427e";

JWT = {
  // value 为传入值， expires为过期时间，这两者都会在token字符串中题先
  generate(value, expires = "30 days") {
    try {
      return jsonwebtoken.sign(value, secret, { expiresIn: expires });
    } catch (e) {
      console.error("jwt sign error --->", e);
      return "";
    }
  },

  verify(token) {
    try {
      return jsonwebtoken.verify(token, secret); // 如果过期将返回false
    } catch (e) {
      console.error("jwt verify error --->", e);
      return false;
    }
  },
};

module.exports = {
  JWT,
};
