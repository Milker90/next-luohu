import "../../../styles/report/Result.module.less";
import IconFont from "../../iconfont";
import TouchFeedback from "rmc-feedback";

const Header = ({ icon, title, expand, expandClick }) => {
  return (
    <TouchFeedback>
      <div className="headerContainer" onClick={expandClick}>
        <IconFont name={icon} size={24} />
        <span className="headerTitle">{title}</span>
        <IconFont
          name={expand ? "expandless" : "expandmore"}
          color="#666"
          size={24}
        />
      </div>
    </TouchFeedback>
  );
};

export default Header;
