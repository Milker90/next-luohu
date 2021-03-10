import { useState } from "react";
import { Toast } from "antd-mobile";

const useZhiZhuQuyu = () => {
  const [noUseZhiZhuQuYu, setNoUseZhiZhuQuYu] = useState(false);
  const [workAndJuzhuLevel, setWorkAndJuzhuLevel] = useState();
  const [onlyJuzhuLevel, setOnlyJuzhuLevel] = useState();

  const verify = () => {
    if (noUseZhiZhuQuYu) return true;
    if (workAndJuzhuLevel === undefined) {
      Toast.fail("请选择在城六区之外其他行政区自有住所居住且工作的年限", 1.5);
      return false;
    }

    if (workAndJuzhuLevel === undefined) {
      Toast.fail("请选择在城六区之外其他行政区自有住所居住的年限", 1.5);
      return false;
    }

    return true;
  };

  const values = () => {
    return {
      noUseZhiZhuQuYu,
      workAndJuzhuLevel: workAndJuzhuLevel ? workAndJuzhuLevel[0] : 0,
      onlyJuzhuLevel: onlyJuzhuLevel ? onlyJuzhuLevel[0] : 0,
    };
  };

  const onChangeNoUseZhiZhuQuYu = () => {
    setNoUseZhiZhuQuYu((value) => !value);
  };

  const onChangeWorkAndJuzhu = (value) => {
    setWorkAndJuzhuLevel(value);
  };

  const onChangeOnlyJuzhu = (value) => {
    setOnlyJuzhuLevel(value);
  };

  return {
    verify,
    values,
    noUseZhiZhuQuYu,
    onChangeNoUseZhiZhuQuYu,
    workAndJuzhuLevel,
    onChangeWorkAndJuzhu,
    onlyJuzhuLevel,
    onChangeOnlyJuzhu,
  };
};

export default useZhiZhuQuyu;
