import Header from "./Header";
import { InputItem, WhiteSpace } from "antd-mobile";
import { useState } from "react";
import "../../../styles/report/steps/StepCommon.module.less";

const WenDingZhuSuo = ({ zhuSuoMonth, onChange }) => {
  const [inputItemActive, setInputItemActive] = useState(false);

  const onBlur = () => {
    setInputItemActive(false);
  };

  const onFocus = () => {
    setInputItemActive(true);
  };

  return (
    <div className="stepContainer">
      <Header iconName="home" title="合法稳定住所" />
      <WhiteSpace size="xl" />
      <div className="inputItemTitle">在自有产权住所连续居住月数</div>
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
          value={zhuSuoMonth}
          maxLength={3}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>

      <WhiteSpace size="xl" />
      <WhiteSpace size="md" />
      <div className="itemHelpInfo">
        <p>1. 此项指标计算时间截止到积分落户申报工作启动的上一年度12月31日。</p>

        <p>
          2.
          当连续居住年限多于在京合法稳定就业年限，以申请人在京合法稳定就业年限作为连续居住年限，并优先计算自有住所积分。
        </p>

        <p>3. 同一时间只能选取自有住所、单位宿舍或租赁住所之一积分，不累计。</p>

        <p>
          4.
          北京市积分落户操作管理细则发布之日（不含）以前单位宿舍、租赁住所居住时间不用填写，将根据填写的合法稳定就业总月数与自有住所的差值计算得出。
          请填写截止到积分落户申报工作启动的上一年度12月31日，申请人“在京连续缴纳社会保险年限”的累计月数，不包括社会保险个人权益记录中的补缴月数。
        </p>
      </div>
    </div>
  );
};

export default WenDingZhuSuo;
