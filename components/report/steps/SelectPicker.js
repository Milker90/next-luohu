import "../../../styles/report/steps/StepCommon.module.less";
import { Picker } from "antd-mobile";
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

const SelectPicker = ({ data, title, value, onChange, extra = "请选择" }) => {
  const [active, setActive] = useState(false);

  const onVisibleChange = (visible) => {
    setActive(visible);
  };
  return (
    <Picker
      data={data}
      value={value}
      cols={1}
      onVisibleChange={onVisibleChange}
      onChange={onChange}
      onOk={onChange}
      extra={extra}
    >
      <NoTitleSelectItem value={value} title={title} active={active} />
    </Picker>
  );
};

export default SelectPicker;
