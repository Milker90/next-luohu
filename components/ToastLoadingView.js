import ReactDom from "react-dom";
import * as React from "react";
import { ActivityIndicator } from "antd-mobile";

const ToastLoadingView = ({ title }) => {
  return (
    <div className="toastLoadingContainer">
      <div className="toastLoadingView">
        <ActivityIndicator animating size="large" color="#66bb6a" />
        <span className="toastTitle">{title}</span>
      </div>
    </div>
  );
};
export default ToastLoadingView;
