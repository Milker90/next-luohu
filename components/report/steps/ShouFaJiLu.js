import React from "react";
import Header from "./Header";
import { WhiteSpace } from "antd-mobile";
import SelectPicker from "./SelectPicker";

const ShouFaJiLu = ({ noShouFaNum, onChangeNoShouFaNum, noShouFaData }) => {
  return (
    <div className="stepContainer">
      <Header iconName="star" title="守法记录" />
      <WhiteSpace size="xs" />
      <SelectPicker
        title="行政拘留处罚次数"
        data={noShouFaData}
        value={noShouFaNum}
        onChange={onChangeNoShouFaNum}
      />
    </div>
  );
};

export default React.memo(ShouFaJiLu);
