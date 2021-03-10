import { useState } from "react";
import { Toast } from "antd-mobile";

const useWenDingZhuSuo = () => {
  const [zhuSuoMonth, setZhuSuoMonth] = useState();

  const onChange = (value) => {
    setZhuSuoMonth(value);
  };

  const verify = () => {
    if (zhuSuoMonth === undefined) {
      Toast.fail("请输入在自有产权住所连续居住月数", 1.5);
      return false;
    }

    return true;
  };

  const values = () => {
    return { zhuSuoMonth: parseInt(zhuSuoMonth) };
  };

  return { verify, values, zhuSuoMonth, onChange };
};

export default useWenDingZhuSuo;
