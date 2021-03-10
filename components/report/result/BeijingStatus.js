import React from "react";
import { List, WhiteSpace } from "antd-mobile";
import "../../../styles/report/Result.module.less";
import Header from "./Header";

const BeijingStatus = ({ expand, setExpand, data }) => {
  const Item = List.Item;
  const expandClick = () => {
    setExpand((e) => {
      return {
        ...e,
        expandBeijingStatus: !e.expandBeijingStatus,
      };
    });
  };

  console.log("BeijingStatus - render");
  return (
    <List
      renderHeader={
        <Header
          icon="beijing-status"
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
                  <table>
                    <thead>
                      <tr>
                        {item.history.titles.map((title) => (
                          <th key={title}>{title}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {item.history.values.map((subItem, index) => (
                        <tr key={index}>
                          {subItem.map((value) => (
                            <td key={value}>{value}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <WhiteSpace size="xl" />
                  <span className="itemTitle">{item.result.title}</span>
                  <WhiteSpace size="lg" />
                  <table>
                    <thead>
                      <tr>
                        {item.result.data.titles.map((title) => (
                          <th key={title}>{title}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {item.result.data.values.map((subItem, index) => (
                        <tr key={index}>
                          {subItem.map((value) => (
                            <td key={value}>{value}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Item>
          ))}
        </>
      ) : null}
    </List>
  );
};

export default React.memo(BeijingStatus);
