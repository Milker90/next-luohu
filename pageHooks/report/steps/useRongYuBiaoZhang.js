import { useState } from "react";
import { Toast } from "antd-mobile";

const useRongYuBiaoZhang = () => {
  const [rongYuBiaoZhangLevel, setRongYuBiaoZhangLevel] = useState();
  const rongYuBiaoZhangValues = [
    {
      label: "不符合荣誉表彰积分条件",
      value: 0,
      sorce: 0,
    },
    {
      label: "省部级以上劳动模范",
      value: 1,
      sorce: 20,
    },
    {
      label: "全国道德模范或首都道德模范",
      value: 2,
      sorce: 20,
    },
    {
      label: "全国见义勇为英雄模范或首都见义勇为好市民",
      value: 3,
      sorce: 20,
    },
  ];
  const onChangeRongYuBiaoZhangLevel = (value) => {
    setRongYuBiaoZhangLevel(value);
  };

  const verify = () => {
    if (rongYuBiaoZhangLevel === undefined) {
      Toast.fail("请选择荣誉表彰", 1.5);
      return false;
    }

    return true;
  };

  const values = () => {
    return {
      rongYuBiaoZhangLevel: rongYuBiaoZhangLevel[0],
    };
  };

  return {
    verify,
    values,
    rongYuBiaoZhangLevel,
    rongYuBiaoZhangValues,
    onChangeRongYuBiaoZhangLevel,
  };
};

export default useRongYuBiaoZhang;
