import React from "react";
import { List } from "antd-mobile";
import "../../../styles/report/Result.module.less";
import Header from "./Header";

const Forecast = ({ expand, setExpand, data }) => {
  const Item = List.Item;
  const expandClick = () => {
    setExpand((e) => {
      return {
        ...e,
        expandForecast: !e.expandForecast,
      };
    });
  };
  console.log("Forecast - render");

  const reportResultDesClassName = (reportResultLevel) => {
    if (reportResultLevel === 0) {
      return "reportResultNarmal";
    } else if (reportResultLevel === 10) {
      return "reportResultSuccess";
    } else if (reportResultLevel === 20) {
      return "reportResultWarn";
    } else {
      return "reportResultFail";
    }
  };

  return (
    <List
      renderHeader={
        <Header
          icon="forecast"
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
                  <div className="gongShi45Container">
                    {item.gongShis
                      ? item.gongShis.map((value) => (
                          <div className="gongShi45" key={value}>
                            {value}
                          </div>
                        ))
                      : null}
                  </div>

                  {item.list.map((item) => (
                    <div key={item.title}>
                      {item.desTitle ? (
                        <span className="calGongShiTitle">{item.desTitle}</span>
                      ) : null}

                      <div className="oneContentItem">
                        <div className="oneContentItemTitle">{item.title}</div>
                        <div className="oneContentItemValue">{item.value}</div>
                      </div>
                    </div>
                  ))}
                  <div
                    className={reportResultDesClassName(item.reportResultLevel)}
                  >
                    {item.reportResultDes}
                  </div>
                </div>
              </div>
            </Item>
          ))}
        </>
      ) : null}
    </List>
  );
};

export default React.memo(Forecast);
