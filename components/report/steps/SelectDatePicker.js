import "../../../styles/report/steps/StepCommon.module.less";
import { DatePicker } from "antd-mobile";
import { useState } from "react";

const NoTitleSelectItem = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={props.active ? "noTitleActiveSelectItem" : "noTitleSelectItem"}
    >
      {props.title ? (
        <div className="seleteItemTitle">{props.title}</div>
      ) : null}
      <div
        className={props.value ? "noTitleActiveItemValue" : "noTitleItemValue"}
      >
        {props.extra}
      </div>
    </div>
  );
};

const SelectDatePicker = ({
  title,
  value,
  maxDate,
  minDate,
  onChange,
  pickerTitle,
  extra = "请选择",
}) => {
  const [active, setActive] = useState(false);

  const onVisibleChange = (visible) => {
    setActive(visible);
  };
  return (
    <DatePicker
      mode="date"
      title={pickerTitle}
      extra={extra}
      maxDate={maxDate}
      minDate={minDate}
      value={value}
      onChange={onChange}
      onVisibleChange={onVisibleChange}
    >
      <NoTitleSelectItem value={value} title={title} active={active} />
    </DatePicker>
  );
};

export default SelectDatePicker;
