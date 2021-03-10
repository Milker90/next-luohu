import "../../../styles/report/steps/StepCommon.module.less";
import IconFont from "../../iconfont";

const ArrowSelectItem = ({ title, value, onClick }) => {
  return (
    <div className="arrowSelectItem" onClick={onClick}>
      <span className={value ? "arrowSelectItemValue" : "arrowSelectItemTitle"}>
        {value ? value : title}
      </span>
      <IconFont name="arrow-right" size={30} color="#b1b7c0" />
    </div>
  );
};

export default ArrowSelectItem;
