import { List } from "antd-mobile";
import React from "react";
import "../../../styles/report/Result.module.less";
import Header from "./Header";

const Summary = ({ expand, setExpand, data }) => {
  const Item = List.Item;
  const expandClick = () => {
    setExpand((e) => {
      return {
        ...e,
        expandSummary: !e.expandSummary,
      };
    });
  };
  console.log("Summary - render");
  // console.log(data);
  return (
    <List
      renderHeader={
        <Header
          icon="summary"
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

export default React.memo(Summary);
