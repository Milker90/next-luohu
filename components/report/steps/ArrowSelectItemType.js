import { Radio } from "antd-mobile";
import TouchFeedback from "rmc-feedback";
import "../../../styles/report/ArrowSelectItemType.module.less";
import Modal from "react-modal";

const ArrowSelectItemType = ({
  isOpen,
  closeHandle,
  finishHandle,
  title,
  data,
  typeValue,
  onChangeTypeValue,
}) => {
  const items = data.map((item) => {
    const checked = typeValue
      ? typeValue.value === item.value
        ? true
        : false
      : false;
    return (
      <div
        className="radioItem"
        key={item.value}
        onClick={() => onChangeTypeValue(item)}
      >
        <span className="radioItemTitle">{item.label}</span>
        <Radio checked={checked}></Radio>
      </div>
    );
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeHandle}
      className="modal"
      ariaHideApp={false}
      overlayClassName="overlay"
    >
      <div className="container">
        <div className="title">{title}</div>
        {items}

        <TouchFeedback>
          <a className="okButton" onClick={finishHandle}>
            <span className="okButtonTitle">确定</span>
          </a>
        </TouchFeedback>
      </div>
    </Modal>
  );
};

export default ArrowSelectItemType;
