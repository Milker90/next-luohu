import { useState } from "react";
import { Toast } from "antd-mobile";

const useNaShui = () => {
  const [naShuiLevel, setNaShuiLevel] = useState();
  const [naShuiType, setNaShuiType] = useState();
  const [nashuiIllegal, setNashuiIllegal] = useState([0]);
  const naShuiTypes = [
    {
      label: "不满足相关纳税积分条件",
      value: 0,
    },
    {
      label: "个人所得税纳税额在10万元及以上",
      value: 1,
    },
  ];

  const naShuiValues1 = [
    {
      label: "1年",
      score: 2,
      value: 0,
    },
    {
      label: "2年",
      score: 4,
      value: 1,
    },
    {
      label: "3年",
      score: 6,
      value: 2,
    },
  ];

  const naShuiValues2 = [...Array(11).keys()].map((value) => {
    return {
      label: value.toString(),
      value,
    };
  });

  const onChangeNaShuiType = (value) => {
    setNaShuiLevel(undefined);
    setNaShuiType(value);
  };

  const onChangeNaShuiLevel = (value) => {
    setNaShuiLevel(value);
  };

  const onChangeNashuiIllegal = (value) => {
    setNashuiIllegal(value);
  };

  const verify = () => {
    if (naShuiType === undefined) {
      Toast.fail("请选择纳税类型", 1.5);
      return false;
    }

    if (naShuiType.value !== 0) {
      if (naShuiLevel === undefined) {
        Toast.fail("请选择纳税年限", 1.5);
        return false;
      }
    }

    return true;
  };

  const values = () => {
    console.log(naShuiType);
    return {
      naShuiType: naShuiType.value,
      naShuiLevel: naShuiLevel ? naShuiLevel[0] : undefined,
      nashuiIllegal: nashuiIllegal ? nashuiIllegal[0] : undefined,
    };
  };

  return {
    verify,
    values,
    naShuiTypes,
    naShuiType,
    onChangeNaShuiType,
    naShuiLevel,
    onChangeNaShuiLevel,
    nashuiIllegal,
    onChangeNashuiIllegal,
    naShuiValues1,
    naShuiValues2,
  };
};

export default useNaShui;
