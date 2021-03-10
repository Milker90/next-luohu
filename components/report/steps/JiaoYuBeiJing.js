import React, { useState } from "react";
import Header from "./Header";
import { InputItem, WhiteSpace } from "antd-mobile";
import SelectPicker from "./SelectPicker";
import "../../../styles/report/steps/StepCommon.module.less";

const JiaoYuBeiJing = ({
  jiaoYuLevel,
  jiaoYuSheBaoMonth,
  onChangeJiaoYuLevel,
  onChangeJiaoYuSheBaoMonth,
}) => {
  const ynValues = [
    {
      label: "不满足教育背景积分条件",
      value: 0,
      sorce: 0,
    },
    {
      label: "大学专科(含高职)",
      value: 1,
      sorce: 10.5,
    },
    {
      label: "只取得大学本科学历",
      value: 2,
      sorce: 10.5,
    },
    {
      label: "只取得学士学位",
      value: 3,
      sorce: 10.5,
    },
    {
      label: "大学本科学历并取得学士学位",
      value: 4,
      sorce: 15,
    },
    {
      label: "只取得硕士研究生学历",
      value: 5,
      sorce: 15,
    },
    {
      label: "硕士研究生学历并取得硕士学位",
      value: 6,
      sorce: 26,
    },
    {
      label: "只取得博士研究生学历",
      value: 7,
      sorce: 26,
    },
    {
      label: "只取得博士学位",
      value: 8,
      sorce: 26,
    },
    {
      label: "博士研究生学历并取得博士学位",
      value: 9,
      sorce: 37,
    },
  ];

  const [inputItemActive, setInputItemActive] = useState(false);

  const onBlur = () => {
    setInputItemActive(false);
  };

  const onFocus = () => {
    setInputItemActive(true);
  };

  return (
    <div className="stepContainer">
      <Header iconName="education" title="教育背景" />
      <WhiteSpace size="xl" />
      <div className="inputItemTitle">最高学历(学位)层次</div>
      <SelectPicker
        data={ynValues}
        value={jiaoYuLevel}
        onChange={onChangeJiaoYuLevel}
      />
      <WhiteSpace size="lg" />
      <div className="inputItemTitle">
        取得学历(学位)期间在京连续缴纳社会保险年限（累计月数）
      </div>
      <div
        className={
          inputItemActive ? "inputItemActiveContainer" : "inputItemContainer"
        }
      >
        <InputItem
          key="WenDingJiuYe"
          className="inputItemValue"
          style={{ fontSize: "16px", color: "#888" }}
          type="number"
          placeholder="请输入整数"
          extra="月"
          value={jiaoYuSheBaoMonth}
          maxLength={3}
          onChange={onChangeJiaoYuSheBaoMonth}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>

      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <div className="itemHelpInfo">
        <p>
          1.
          取得学历(学位)期间连续缴纳社会保险年限及连续居住年限的积分与学历(学位)积分不累计。
        </p>

        <p>2. 教育背景指标：指经国家教育部承认的国内及国（境）外学历学位。</p>
      </div>
    </div>
  );
};

export default React.memo(JiaoYuBeiJing);
