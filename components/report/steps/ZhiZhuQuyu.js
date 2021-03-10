import React from "react";
import Header from "./Header";
import { WhiteSpace } from "antd-mobile";
import SwitchItem from "./SwitchItem";
import SelectPicker from "./SelectPicker";
import "../../../styles/report/steps/StepCommon.module.less";

const ZhiZhuQuyu = ({
  noUseZhiZhuQuYu,
  onChangeNoUseZhiZhuQuYu,
  workAndJuzhuLevel,
  onChangeWorkAndJuzhu,
  onlyJuzhuLevel,
  onChangeOnlyJuzhu,
}) => {
  const workAndJuzhuValues = [
    {
      label: "不满足该项",
      value: 0,
      score: 0,
    },
    {
      label: "满1年",
      score: 3,
      value: 1,
    },
    {
      label: "满2年",
      score: 6,
      value: 2,
    },
    {
      label: "满3年",
      score: 9,
      value: 3,
    },
    {
      label: "满4年及以上",
      score: 12,
      value: 4,
    },
  ];

  const onlyJuzhuValues = [
    {
      label: "不满足该项",
      score: 0,
      value: 0,
    },
    {
      label: "满1年",
      score: 2,
      value: 1,
    },
    {
      label: "满2年",
      score: 4,
      value: 2,
    },
    {
      label: "满3年",
      score: 6,
      value: 3,
    },
    {
      label: "满4年",
      score: 8,
      value: 4,
    },
    {
      label: "满5年",
      score: 10,
      value: 5,
    },
    {
      label: "满6年及以上",
      score: 12,
      value: 6,
    },
  ];

  return (
    <div className="stepContainer">
      <Header iconName="city" title="职住区域" />
      <WhiteSpace size="xl" />
      <SwitchItem checked={noUseZhiZhuQuYu} onChange={onChangeNoUseZhiZhuQuYu}>
        不以职住区域指标积分落户或不满足相关职住区域积分条件
      </SwitchItem>
      {noUseZhiZhuQuYu ? null : (
        <>
          <WhiteSpace size="lg" />
          <div className="inputItemTitle">
            在城六区之外其他行政区自有住所居住且工作
          </div>
          <SelectPicker
            data={workAndJuzhuValues}
            value={workAndJuzhuLevel}
            onChange={onChangeWorkAndJuzhu}
          />

          <WhiteSpace size="lg" />
          <div className="inputItemTitle">
            在城六区之外其他行政区自有住所居住
          </div>
          <SelectPicker
            data={onlyJuzhuValues}
            value={onlyJuzhuLevel}
            onChange={onChangeOnlyJuzhu}
          />
        </>
      )}

      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <div className="itemHelpInfo">
        自2018年1月1日起，上述情况累计12个月按满1年积分，不足12个月不积分，最高加12分。
      </div>
    </div>
  );
};

export default React.memo(ZhiZhuQuyu);
