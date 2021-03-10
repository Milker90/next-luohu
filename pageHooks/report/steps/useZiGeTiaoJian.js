import { Toast } from "antd-mobile";
import { useState } from "react";

const useZiGeTiaoJian = () => {
  const [hasJuZhuZheng, setHasJuZhuZheng] = useState(undefined);
  const [notOverAge, setNotOverAge] = useState(undefined);
  const [sevenYearSheBao, setSevenYearSheBao] = useState(undefined);
  const [noCriminalRecord, setNoCriminalRecord] = useState(undefined);

  const verify = () => {
    if (hasJuZhuZheng === undefined) {
      Toast.fail("未选择是否持有本市居住证", 1.5);
      return false;
    }

    if (notOverAge === undefined) {
      Toast.fail("未选择是否不超过法定退休年龄", 1.5);
      return false;
    }

    if (sevenYearSheBao === undefined) {
      Toast.fail("未选择是否在京连续缴纳社会保险7年及以上", 1.5);
      return false;
    }

    if (noCriminalRecord === undefined) {
      Toast.fail("未未选择是否无刑事犯罪记录", 1.5);
      return false;
    }

    if (
      hasJuZhuZheng[0] === 1 &&
      notOverAge[0] === 1 &&
      sevenYearSheBao[0] === 1 &&
      noCriminalRecord[0] === 1
    ) {
      return true;
    }

    Toast.offline("未达到积分落户资格，无法为您生成报告", 1.5);
    return false;
  };

  return {
    verify,
    hasJuZhuZheng,
    setHasJuZhuZheng,
    notOverAge,
    setNotOverAge,
    sevenYearSheBao,
    setSevenYearSheBao,
    noCriminalRecord,
    setNoCriminalRecord,
  };
};

export default useZiGeTiaoJian;
