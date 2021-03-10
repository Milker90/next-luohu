import { Switch } from "antd-mobile";
import "../../../styles/report/steps/StepCommon.module.less";

const SwitchItem = (props) => {
  return (
    <div className="switchItem">
      <div className="switchItemTitle">{props.children}</div>
      <Switch checked={props.checked} onChange={props.onChange} />
    </div>
  );
};

export default SwitchItem;
