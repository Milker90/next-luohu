import { useEffect, useState } from "react";
import useZiGeTiaoJian from "./steps/useZiGeTiaoJian";
import useWenDingJiuYe from "./steps/useWenDingJiuYe";
import useWenDingZhuSuo from "./steps/useWenDingZhuSuo";
import useJiaoYuBeiJing from "./steps/useJiaoYuBeiJing";
import useZhiZhuQuyu from "./steps/useZhiZhuQuyu";
import useChuangYeChuangXin from "./steps/useChuangYeChuangXin";
import useNaShui from "./steps/useNaShui";
import useNianLing from "./steps/useNianLing";
import useRongYuBiaoZhang from "./steps/useRongYuBiaoZhang";
import useShouFaJiLu from "./steps/useShouFaJiLu";
import { requestCreateReport } from "../../services";
import { Toast, Icon } from "antd-mobile";
import { useRouter } from "next/router";

// const customIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 64 64"
//     className="am-icon am-icon-md"
//   >
//     <path
//       fill="#929922"
//       d="M29.875-1.875c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 60.7c-15.85 0-28.7-12.85-28.7-28.7s12.85-28.7 28.7-28.7 28.7 12.85 28.7 28.7-12.85 28.7-28.7 28.7z"
//     />
//     <path
//       fill="#52c41a"
//       d="M61.858 30.34c.003-.102.008-.203.008-.305 0-11.43-5.996-21.452-15.01-27.113l-.013.026c-.24-.137-.515-.22-.81-.22-.912 0-1.65.738-1.65 1.65 0 .654.384 1.215.937 1.482 7.963 5.1 13.247 14.017 13.247 24.176 0 .147-.01.293-.01.44h.022c0 .01-.004.02-.004.03 0 .91.74 1.65 1.65 1.65s1.65-.74 1.65-1.65c0-.06-.012-.112-.018-.167z"
//     />
//   </svg>
// );

const useReportCreate = (
  slideGoto,
  uid = "3b020ca3601758af01e1bc5363ddb84f",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzYjAyMGNhMzYwMTc1OGFmMDFlMWJjNTM2M2RkYjg0ZiIsIm9wZW5pZCI6Im9NZXhSNVM2eGxQb25ROGpOZGhIQzRZMUNuWU0iLCJpYXQiOjE2MTIzMzcxNTYsImV4cCI6MTYxNDkyOTE1Nn0.21F31Jc-R0nZr0SL8C7JgAPjHIzgy4zOY0_p9FJP5Ts"
) => {
  const router = useRouter();
  const stepNames = [
    "ZiGeTiaoJian",
    "WenDingJiuYe",
    "WenDingZhuSuo",
    "JiaoYuBeiJing",
    "ZhiZhuQuyu",
    "ChuangYeChuangXin",
    "NaShui",
    "NianLing",
    "RongYuBiaoZhang",
    "ShouFaJiLu",
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  const [isChangingSlide, setIsChangingSlide] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const ziGeTiaoJian = useZiGeTiaoJian();
  const wenDingJiuYe = useWenDingJiuYe();
  const wenDingZhuSuo = useWenDingZhuSuo();
  const jiaoYuBeiJing = useJiaoYuBeiJing();
  const zhiZhuQuyu = useZhiZhuQuyu();
  const chuangYeChuangXin = useChuangYeChuangXin();
  const naShui = useNaShui();
  const nianLing = useNianLing();
  const rongYuBiaoZhang = useRongYuBiaoZhang();
  const shouFaJiLu = useShouFaJiLu();

  const createReport = async () => {
    try {
      setIsCreating(true);
      const params = {
        ...wenDingJiuYe.values(),
        ...wenDingZhuSuo.values(),
        ...jiaoYuBeiJing.values(),
        ...zhiZhuQuyu.values(),
        ...chuangYeChuangXin.values(),
        ...naShui.values(),
        ...nianLing.values(),
        ...rongYuBiaoZhang.values(),
        ...shouFaJiLu.values(),
        uid,
        token,
      };
      console.log(params);
      const response = await requestCreateReport(params);
      console.log(response);
      setIsCreating(false);

      router.push({
        pathname: "/report/result",
        query: {
          uid,
          token,
          reportId: response,
        },
      });
    } catch (error) {
      console.log("error =======");
      console.log(error);
      setIsCreating(false);
      Toast.offline("生成报告失败", 1.5);
    }
  };

  const beforeChangeSlider = (current, next) => {
    // console.log(`beforeChangeSlider======current:${current} next:${next}`);
    setIsChangingSlide(true);
  };

  const afterChangeSlider = (current) => {
    // console.log(`afterChangeSlider=====current:${current}`);
    setIsChangingSlide(false);
  };

  const previousSlide = () => {
    if (isChangingSlide) return;
    if (slideIndex <= 0) return;
    const index = slideIndex - 1;
    setSlideIndex(index);
    slideGoto(index);
  };

  const nextSlide = () => {
    // router.push({
    //   pathname: "/report/result",
    //   query: {
    //     uid,
    //     token,
    //     reportId: "1526e12a601ab37c020b1bc22bf3ff92",
    //   },
    // });
    // return;
    // router.push({
    //   pathname: "/report/result",
    //   query: {
    //     uid,
    //     token,
    //   },
    // });

    // return;
    // ToastLoadingView.showLoading();
    if (isChangingSlide) return;
    if (index >= stepNames.length - 1) return;
    const index = slideIndex + 1;
    const stepName = stepNames[slideIndex];
    if (
      (stepName === "ZiGeTiaoJian" && ziGeTiaoJian.verify()) ||
      (stepName === "WenDingJiuYe" && wenDingJiuYe.verify()) ||
      (stepName === "WenDingZhuSuo" && wenDingZhuSuo.verify()) ||
      (stepName === "JiaoYuBeiJing" && jiaoYuBeiJing.verify()) ||
      (stepName === "ZhiZhuQuyu" && zhiZhuQuyu.verify()) ||
      (stepName === "ChuangYeChuangXin" && chuangYeChuangXin.verify()) ||
      (stepName === "NaShui" && naShui.verify()) ||
      (stepName === "NianLing" && nianLing.verify()) ||
      (stepName === "RongYuBiaoZhang" && rongYuBiaoZhang.verify())
    ) {
      setSlideIndex(index);
      slideGoto(index);
    } else if (stepName === "ShouFaJiLu" && shouFaJiLu.verify()) {
      createReport();
    }
  };

  // console.log(slideIndex);
  console.log("useReportCreate");

  return {
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
  };
};

export default useReportCreate;
