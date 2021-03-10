import React from "react";
import Header from "./Header";
import { WhiteSpace } from "antd-mobile";
import SelectPicker from "./SelectPicker";
import "../../../styles/report/steps/StepCommon.module.less";

const RongYuBiaoZhang = ({
  rongYuBiaoZhangLevel,
  rongYuBiaoZhangValues,
  onChangeRongYuBiaoZhangLevel,
}) => {
  return (
    <div className="stepContainer">
      <Header iconName="jiangbei" title="荣誉表彰" />
      <WhiteSpace size="xl" />
      <div className="inputItemTitle">荣誉表彰类型</div>
      <SelectPicker
        data={rongYuBiaoZhangValues}
        value={rongYuBiaoZhangLevel}
        onChange={onChangeRongYuBiaoZhangLevel}
        extra="请选择"
      />
    </div>
  );
};

export default React.memo(RongYuBiaoZhang);
