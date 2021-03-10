import Header from "./Header";
import { InputItem, WhiteSpace } from "antd-mobile";
import React from "react";
import { useState } from "react";
import "../../../styles/report/steps/StepCommon.module.less";

const WenDingJiuYe = ({ jiuyeMonth, onChange }) => {
  console.log("WenDingJiuYe - render");

  const [inputItemActive, setInputItemActive] = useState(false);

  const onBlur = () => {
    setInputItemActive(false);
  };

  const onFocus = () => {
    setInputItemActive(true);
  };

  return (
    <div className="stepContainer">
      <Header iconName="jiuye" title="合法稳定就业" />
      <WhiteSpace size="xl" />

      <div className="inputItemTitle">在京连续缴纳社会保险累计月数</div>
      <div
        className={
          inputItemActive ? "inputItemActiveContainer" : "inputItemContainer"
        }
      >
        <InputItem
          key="WenDingJiuYe"
          className="inputItemValue"
          style={{ fontSize: "16px", color: "#616672" }}
          type="number"
          placeholder="请输入整数"
          extra="月"
          value={jiuyeMonth}
          maxLength={3}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>

      <WhiteSpace size="xl" />
      <WhiteSpace size="md" />
      <div className="itemHelpInfo">
        请填写截止到积分落户申报工作启动的上一年度12月31日，申请人“在京连续缴纳社会保险年限”的累计月数，不包括社会保险个人权益记录中的补缴月数。
      </div>
    </div>
  );
};

export default React.memo(WenDingJiuYe);
