import { useState } from "react";
import { Toast } from "antd-mobile";

const useWenDingJiuYe = () => {
  const [jiuyeMonth, setJiuyeMonth] = useState();

  const onChange = (value) => {
    setJiuyeMonth(value);
  };

  const verify = () => {
    if (jiuyeMonth === undefined) {
      Toast.fail("请输入在京连续缴纳社会保险累计月数", 1.5);
      return false;
    }

    if (jiuyeMonth < 84) {
      Toast.offline(
        "未达到积分落户资格要求的连续7年社保，无法为您生成报告",
        1.5
      );
      return false;
    }

    return true;
  };

  const values = () => {
    return { jiuyeMonth: parseInt(jiuyeMonth) };
  };

  return { verify, values, jiuyeMonth, onChange };
};

export default useWenDingJiuYe;
