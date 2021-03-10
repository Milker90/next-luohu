import { useState } from "react";

const useShouFaJiLu = () => {
  const [noShouFaNum, setNoShouFaNum] = useState([0]);
  const onChangeNoShouFaNum = (value) => {
    setNoShouFaNum(value);
  };

  const noShouFaData = [...Array(11).keys()].map((value) => {
    return {
      label: value.toString(),
      value,
    };
  });

  const verify = () => {
    return true;
  };

  const values = () => {
    return {
      noShouFaNum: noShouFaNum[0],
    };
  };

  return { verify, values, noShouFaNum, onChangeNoShouFaNum, noShouFaData };
};

export default useShouFaJiLu;
