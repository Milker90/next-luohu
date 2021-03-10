import axios from "axios";
import * as AxiosLogger from "axios-logger";

let baseURL;
if (process.env.NODE_ENV === "production") {
  baseURL = "https://	h5.nicepq.com";
} else {
  baseURL = "https://	h5.nicepq.com";
}

axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 25000;
axios.interceptors.request.use(AxiosLogger.requestLogger);

// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    config.headers.common["X-Client"] = "luohu";
    config.headers.post["Content-Type"] = "application/json";

    // const token = store.getState().account.token;
    // if (token && token.length > 0) {
    //   config.headers.common["X-User-Token"] = token;
    // }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    if (response.status !== 200) {
      return Promise.reject(response);
    }

    const jsonResult = response.data;
    // console.log("jsonResult====");
    // console.log(jsonResult);
    // console.log("jsonResult.code =======" + jsonResult.code);

    if (jsonResult.code === 200) {
      return Promise.resolve(jsonResult.data);
    } else {
      return Promise.reject(jsonResult);
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
