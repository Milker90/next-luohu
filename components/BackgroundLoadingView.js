import { ActivityIndicator } from "antd-mobile";

const BackgroundLoadingView = () => {
  return (
    <div className="bgloadingView">
      <ActivityIndicator animating size="large" color="#66bb6a" />
    </div>
  );
};

export default BackgroundLoadingView;
