import { useState } from "react";
import { Toast } from "antd-mobile";

const useNianLing = () => {
  const [birthday, setBirthday] = useState();
  // const nianLingValues = [
  //   {
  //     label: "不超过45周岁",
  //     score: 20,
  //     value: 0,
  //   },
  //   {
  //     label: "45周岁以上不超过46周岁",
  //     score: 16,
  //     value: 1,
  //   },
  //   {
  //     label: "46周岁以上不超过47周岁",
  //     score: 12,
  //     value: 2,
  //   },
  //   {
  //     label: "47周岁以上不超过48周岁",
  //     score: 8,
  //     value: 3,
  //   },
  //   {
  //     label: "48周岁以上不超过49周岁",
  //     score: 4,
  //     value: 4,
  //   },
  //   {
  //     label: "49周岁以上",
  //     score: 0,
  //     value: 5,
  //   },
  // ];
  const onChangeBirthday = (value) => {
    setBirthday(value);
  };

  const verify = () => {
    if (birthday === undefined) {
      Toast.fail("请选择出生日期", 1.5);
      return false;
    }

    return true;
  };

  const values = () => {
    return {
      birthday: birthday,
    };
  };

  return {
    verify,
    values,
    birthday,
    onChangeBirthday,
  };
};

export default useNianLing;
