import React from "react";
import { List } from "antd-mobile";
import "../../../styles/report/Result.module.less";
import Header from "./Header";

const PersonalStatus = ({ expand, setExpand, data }) => {
  const Item = List.Item;
  const expandClick = () => {
    setExpand((e) => {
      return {
        ...e,
        expandPersonalStatus: !e.expandPersonalStatus,
      };
    });
  };
  console.log("PersonalStatus - render");
  return (
    <List
      renderHeader={
        <Header
          icon="personal-status"
          title={data.title}
          expand={expand}
          expandClick={expandClick}
        />
      }
    >
      {expand ? (
        <>
          {data.list.map((item) => (
            <Item key={item.title}>
              <div className="itemContainerOne">
                <div className="oneTitle">
                  <div className="yline"></div>
                  <span className="itemTitle">{item.title}</span>
                </div>
                <div className="oneContent">
                  {item.gongShi ? (
                    <div className="gongShi45">{item.gongShi}</div>
                  ) : null}
                  {item.list.map((subItem) => (
                    <div className="oneContentItem" key={subItem.title}>
                      <div className="oneContentItemTitle">{subItem.title}</div>
                      <div className="oneContentItemValue">{subItem.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Item>
          ))}
        </>
      ) : null}
    </List>
  );
};

export default React.memo(PersonalStatus);
