const FailedView = ({ title = "暂无数据" }) => {
  return (
    <div className="failedContainer">
      <span className="failedTitle">{title}</span>{" "}
    </div>
  );
};

export default FailedView;
