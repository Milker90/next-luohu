import { useState } from "react";
import { Toast } from "antd-mobile";

const useJiaoYuBeiJing = () => {
  const [jiaoYuLevel, setJiaoYuLevel] = useState();
  const [jiaoYuSheBaoMonth, setJiaoYuSheBaoMonth] = useState(0);

  const onChangeJiaoYuLevel = (value) => {
    setJiaoYuLevel(value);
  };

  const onChangeJiaoYuSheBaoMonth = (value) => {
    setJiaoYuSheBaoMonth(value);
  };

  const verify = () => {
    if (jiaoYuLevel === undefined) {
      Toast.fail("请选择最高学历(学位)层次", 1.5);
      return false;
    }

    return true;
  };

  const values = () => {
    return {
      jiaoYuLevel: jiaoYuLevel[0],
      jiaoYuSheBaoMonth: parseInt(jiaoYuSheBaoMonth ? jiaoYuSheBaoMonth : 0),
    };
  };

  return {
    verify,
    values,
    jiaoYuLevel,
    jiaoYuSheBaoMonth,
    onChangeJiaoYuLevel,
    onChangeJiaoYuSheBaoMonth,
  };
};

export default useJiaoYuBeiJing;
