import IconFont from "../../iconfont";
import "../../../styles/report/steps/Header.module.less";

const Header = ({ iconName, title }) => {
  return (
    <div className="titleInfo">
      <IconFont name={iconName} color="#66bb6a" size={32} />
      <p className="titleValue">{title}</p>
    </div>
  );
};

export default Header;
