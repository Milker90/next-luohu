import React from "react";
import Header from "./Header";
import { WhiteSpace } from "antd-mobile";
import SelectDatePicker from "./SelectDatePicker";
import "../../../styles/report/steps/StepCommon.module.less";

const NianLing = ({ birthday, onChangeBirthday }) => {
  const nowDate = new Date();
  const maxDate = new Date(nowDate.getFullYear() - 10, 1, 1);
  const minDate = new Date(1900, 1, 1);
  return (
    <div className="stepContainer">
      <Header iconName="rili" title="出生日期" />
      <WhiteSpace size="xs" />
      <SelectDatePicker
        maxDate={maxDate}
        minDate={minDate}
        value={birthday}
        onChange={onChangeBirthday}
        extra="请选择出生日期"
      />
      <WhiteSpace size="xl" />
      <WhiteSpace size="md" />
      <div className="itemHelpInfo">
        年龄申报计算以个人身份证记录为准。年龄计算时间截至积分落户申报工作启动的上一年度1月1日。
      </div>
    </div>
  );
};

export default React.memo(NianLing);
