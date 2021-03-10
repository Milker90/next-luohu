import { useEffect, useState } from "react";
import BeijingStatus from "../../components/report/result/BeijingStatus";
import CalDetail from "../../components/report/result/CalDetail";
import Forecast from "../../components/report/result/Forecast";
import PersonalStatus from "../../components/report/result/PersonalStatus";
import Summary from "../../components/report/result/Summary";
import useReportResult from "../../pageHooks/report/useReportResult";
import BackgroundLoadingView from "../../components/BackgroundLoadingView";
import "../../styles/report/Result.module.less";
import Head from "next/head";
import FailedView from "../../components/FailedView";

function Report() {
  // const { uid, token, reportId, data } = props;
  const { reportData, noReport, expand, setExpand } = useReportResult();

  if (noReport && noReport.length > 0) return <FailedView title={noReport} />;

  if (!reportData.data || reportData.data.summary === undefined)
    return <BackgroundLoadingView />;

  return (
    <div className="resultContainer">
      <Head>
        <title>我的报告</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Summary
        expand={expand.expandSummary}
        setExpand={setExpand}
        data={reportData.data.summary}
      />
      {/* <WhiteSpace size="lg" /> */}
      <CalDetail
        expand={expand.expandCalDetail}
        setExpand={setExpand}
        data={reportData.data.calDetail}
      />
      {/* <WhiteSpace size="lg" /> */}
      <PersonalStatus
        expand={expand.expandPersonalStatus}
        setExpand={setExpand}
        data={reportData.data.personalStatus}
      />
      {/* <WhiteSpace size="lg" /> */}
      <BeijingStatus
        expand={expand.expandBeijingStatus}
        setExpand={setExpand}
        data={reportData.data.beijingStatus}
      />
      {/* <WhiteSpace size="lg" /> */}
      <Forecast
        expand={expand.expandForecast}
        setExpand={setExpand}
        data={reportData.data.forecast}
      />
    </div>
  );
}

// export async function getStaticProps({ params }) {
//   console.log("getStaticProps");
//   console.log(params);
//   return { props: {} };
// }

// export async function getStaticPaths() {
//   const paths = ["/report/1"];
//   return { paths, fallback: false };
// }

// export async function getServerSideProps(context) {
//   console.log(context.query);
//   const { uid, token, reportId } = context.query;
//   const data = await requestReportResult({
//     reportId,
//     uid,
//     token,
//   });
//   return { props: { reportId, uid, token, data } };
// }

export default Report;
