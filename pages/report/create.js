import { useRouter } from "next/router";
import "../../styles/report/Create.module.less";
import TouchFeedback from "rmc-feedback";
import IconFont from "../../components/iconfont";
import useReportCreate from "../../pageHooks/report/useReportCreate";
import * as StepComponent from "../../components/report/steps";
import Slider from "react-slick";
import { useRef } from "react";
import Head from "next/head";
import ToastLoadingView from "../../components/ToastLoadingView";

function CreateReport() {
  const router = useRouter();
  const { uid, token } = router.query;
  const slider = useRef();

  const slideGoto = (index) => {
    slider.current.slickGoTo(index);
  };

  const {
    stepNames,
    slideIndex,
    beforeChangeSlider,
    afterChangeSlider,
    previousSlide,
    nextSlide,
    ziGeTiaoJian,
    wenDingJiuYe,
    wenDingZhuSuo,
    jiaoYuBeiJing,
    zhiZhuQuyu,
    chuangYeChuangXin,
    naShui,
    nianLing,
    rongYuBiaoZhang,
    shouFaJiLu,
    isCreating,
  } = useReportCreate(slideGoto, uid, token);
  const stepCount = stepNames.length;

  const getStepComponent = (name) => {
    if (name === "ZiGeTiaoJian")
      return <StepComponent.ZiGeTiaoJian key={name} {...ziGeTiaoJian} />;
    if (name === "WenDingJiuYe")
      return <StepComponent.WenDingJiuYe key={name} {...wenDingJiuYe} />;
    if (name === "WenDingZhuSuo")
      return <StepComponent.WenDingZhuSuo key={name} {...wenDingZhuSuo} />;
    if (name === "JiaoYuBeiJing")
      return <StepComponent.JiaoYuBeiJing key={name} {...jiaoYuBeiJing} />;
    if (name === "ZhiZhuQuyu")
      return <StepComponent.ZhiZhuQuyu key={name} {...zhiZhuQuyu} />;
    if (name === "ChuangYeChuangXin")
      return (
        <StepComponent.ChuangYeChuangXin key={name} {...chuangYeChuangXin} />
      );
    if (name === "NaShui")
      return <StepComponent.NaShui key={name} {...naShui} />;
    if (name === "NianLing")
      return <StepComponent.NianLing key={name} {...nianLing} />;
    if (name === "RongYuBiaoZhang")
      return <StepComponent.RongYuBiaoZhang key={name} {...rongYuBiaoZhang} />;
    if (name === "ShouFaJiLu")
      return <StepComponent.ShouFaJiLu key={name} {...shouFaJiLu} />;

    return null;
  };

  console.log("CreateReport - render");

  return (
    <>
      <div className="createContainer">
        <Head>
          <title>创建报告</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Slider
          ref={slider}
          className="slider"
          dots={false}
          draggable={false}
          infinite={false}
          swipe={false}
          touchMove={false}
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
          beforeChange={beforeChangeSlider}
          afterChange={afterChangeSlider}
          easing="easeInOutBack"
        >
          {stepNames.map((name) => getStepComponent(name))}
        </Slider>
        <div className="bottomContainer">
          {slideIndex == 0 ? (
            <p />
          ) : (
            <TouchFeedback>
              <a className="backButton" onClick={previousSlide}>
                <IconFont name="back" color="#c7c8cc" size={16} />
                <p className="backButtonTitle">上一步</p>
              </a>
            </TouchFeedback>
          )}
          <TouchFeedback>
            <a className="nextButton" onClick={nextSlide}>
              {slideIndex == stepCount - 1 ? "提交" : "下一步"}
            </a>
          </TouchFeedback>
        </div>
      </div>
      {isCreating ? <ToastLoadingView title="正在生成中..." /> : null}
    </>
  );
}

export default CreateReport;
