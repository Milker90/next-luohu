import { useState } from "react";
import { Toast } from "antd-mobile";

const useChuangYeChuangXin = () => {
  const [chuangYeChuangXinLevel, setChuangYeChuangXinLevel] = useState();
  const [chuangYeChuangXinType, setChuangYeChuangXinType] = useState();
  const chuangYeChuangXinTypes = [
    {
      label: "不满足创新创业积分条件",
      value: 0,
    },
    {
      label: "在科技、文化领域获得国家级或本市市级奖项",
      value: 1,
    },
    {
      label: "在创新创业大赛获得国家级或本市市级奖项",
      value: 2,
    },
    {
      label:
        "在国家高新技术企业或科技型中小企业持股且申请人在该企业连续工作满一个自然年度，且当年持股比例不低于10%",
      value: 3,
    },
  ];

  const chuangYeChuangXinValues1 = [
    {
      label: "积12分",
      score: 12,
      value: 0,
    },
    {
      label: "积11分",
      score: 11,
      value: 1,
    },
    {
      label: "积10分",
      score: 10,
      value: 2,
    },
    {
      label: "积9分",
      score: 9,
      value: 3,
    },
    {
      label: "积8分",
      score: 8,
      value: 4,
    },
    {
      label: "积6分",
      score: 6,
      value: 5,
    },
    {
      label: "积5分",
      score: 5,
      value: 6,
    },
    {
      label: "积4分",
      score: 4,
      value: 7,
    },
    {
      label: "积2分",
      score: 2,
      value: 8,
    },
  ];

  const chuangYeChuangXinValues2 = [
    {
      label: "积12分",
      score: 12,
      value: 0,
    },
    {
      label: "积10分",
      score: 10,
      value: 1,
    },
    {
      label: "积9分",
      score: 9,
      value: 2,
    },
    {
      label: "积8分",
      score: 8,
      value: 3,
    },
    {
      label: "积6分",
      score: 6,
      value: 4,
    },
    {
      label: "积4分",
      score: 4,
      value: 5,
    },
    {
      label: "积3分",
      score: 3,
      value: 6,
    },
    {
      label: "积2分",
      score: 2,
      value: 7,
    },
    {
      label: "积1分",
      score: 1,
      value: 8,
    },
  ];

  const chuangYeChuangXinValues3 = [
    {
      label: "4000万元（含）以上",
      score: 6,
      value: 0,
    },
    {
      label: "2000万元（含）～ 4000万元",
      score: 4,
      value: 1,
    },
    {
      label: "500万元（含）～ 2000万元",
      score: 2,
      value: 2,
    },
  ];

  const onChangeChuangYeChuangXinType = (item) => {
    setChuangYeChuangXinLevel(undefined);
    setChuangYeChuangXinType(item);
  };

  const onChangeChuangYeChuangXinLevel = (value) => {
    setChuangYeChuangXinLevel(value);
  };

  const verify = () => {
    if (chuangYeChuangXinType === undefined) {
      Toast.fail("请选择创新创业类型", 1.5);
      return false;
    }

    if (chuangYeChuangXinType.value !== 0) {
      if (chuangYeChuangXinLevel === undefined) {
        Toast.fail("请选择获奖积分", 1.5);
        return false;
      }
    }

    return true;
  };

  const values = () => {
    return {
      chuangYeChuangXinType: chuangYeChuangXinType.value,
      chuangYeChuangXinLevel: chuangYeChuangXinLevel
        ? chuangYeChuangXinLevel[0]
        : undefined,
    };
  };

  return {
    verify,
    values,
    chuangYeChuangXinTypes,
    chuangYeChuangXinType,
    onChangeChuangYeChuangXinType,
    chuangYeChuangXinLevel,
    setChuangYeChuangXinLevel,
    chuangYeChuangXinValues1,
    chuangYeChuangXinValues2,
    chuangYeChuangXinValues3,
    onChangeChuangYeChuangXinLevel,
  };
};

export default useChuangYeChuangXin;
