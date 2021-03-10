import React from "react";
import { List } from "antd-mobile";
import "../../../styles/report/Result.module.less";
import Header from "./Header";

const CalDetail = ({ expand, setExpand, data }) => {
  const Item = List.Item;
  const expandClick = () => {
    setExpand((e) => {
      return {
        ...e,
        expandCalDetail: !e.expandCalDetail,
      };
    });
  };
  console.log("CalDetail - render");
  return (
    <List
      renderHeader={
        <Header
          icon="cal-detail"
          title={data.title}
          expand={expand}
          expandClick={expandClick}
        />
      }
    >
      {expand ? (
        <>
          {data.list.map((item) => (
            <Item
              extra={<span className="itemValue">{item.value}</span>}
              key={item.title}
            >
              <span className="itemTitle">{item.title}</span>
            </Item>
          ))}
        </>
      ) : null}
    </List>
  );
};

export default React.memo(CalDetail);
