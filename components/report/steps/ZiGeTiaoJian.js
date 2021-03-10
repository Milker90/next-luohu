import { WhiteSpace } from "antd-mobile";
import React from "react";
import Header from "./Header";
import SelectPicker from "./SelectPicker";

const ZiGeTiaoJian = ({
  hasJuZhuZheng,
  setHasJuZhuZheng,
  notOverAge,
  setNotOverAge,
  sevenYearSheBao,
  setSevenYearSheBao,
  noCriminalRecord,
  setNoCriminalRecord,
}) => {
  const ynValues = [
    {
      label: "是",
      value: 1,
    },
    {
      label: "否",
      value: 0,
    },
  ];

  const onChangeHasJuZhuZheng = (value) => {
    setHasJuZhuZheng(value);
  };

  const onChangeNotOverAge = (value) => {
    setNotOverAge(value);
  };

  const onChangeSevenYearSheBao = (value) => {
    setSevenYearSheBao(value);
  };

  const onChangeNoCriminalRecord = (value) => {
    setNoCriminalRecord(value);
  };

  console.log("ZiGeTiaoJian - render");

  return (
    <div className="stepContainer">
      <Header iconName="people" title="资格条件" />
      <WhiteSpace size="xs" />

      <SelectPicker
        title="持有本市居住证"
        data={ynValues}
        value={hasJuZhuZheng}
        onChange={onChangeHasJuZhuZheng}
      />

      <WhiteSpace size="xs" />

      <SelectPicker
        title="不超过法定退休年龄"
        data={ynValues}
        value={notOverAge}
        onChange={onChangeNotOverAge}
      />

      <WhiteSpace size="xs" />

      <SelectPicker
        title="在京连续缴纳社会保险7年及以上"
        data={ynValues}
        value={sevenYearSheBao}
        onChange={onChangeSevenYearSheBao}
      />

      <WhiteSpace size="xs" />

      <SelectPicker
        title="无刑事犯罪记录"
        data={ynValues}
        value={noCriminalRecord}
        onChange={onChangeNoCriminalRecord}
      />
    </div>
  );
};

export default React.memo(ZiGeTiaoJian);
