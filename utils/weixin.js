// import wx from "weixin-js-sdk";
// import dynamic from "next/dynamic";
// const wx = dynamic(import("weixin-js-sdk"), { ssr: false });

function postMessageToMiniPrograms(message) {
  // const wx = (await import("weixin-js-sdk")).default;
  const wx = require("weixin-js-sdk");
  // debugger;
  if (process.browser) {
    let sendSuc = false;
    wx.miniProgram.getEnv(function (res) {
      // console.log(res); // true
      if (res.miniprogram) {
        wx.miniProgram.navigateBack();
        wx.miniProgram.postMessage(message);
        sendSuc = true;
      } else {
        console.log("非小程序环境");
      }
    });
    return sendSuc;
  }
  return false;
}

export { postMessageToMiniPrograms };
