import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { postMessageToMiniPrograms } from "../../utils/weixin";
import { requestReportResult } from "../../services";

const useReportResult = () => {
  const [expand, setExpand] = useState({
    expandSummary: true,
    expandCalDetail: true,
    expandPersonalStatus: true,
    expandBeijingStatus: true,
    expandForecast: true,
  });
  const router = useRouter();
  const [reportData, setReportData] = useState({});
  const [noReport, setNoReport] = useState("");

  useEffect(() => {
    async function fetchData(uid, token, reportId) {
      try {
        const data = await requestReportResult({
          reportId,
          uid,
          token,
        });

        if (data.data) {
          setReportData(data);
        } else if (data.code && data.code === 405) {
          setNoReport("暂无数据");
        } else {
          setNoReport("请求服务器失败");
        }
      } catch (error) {
        setNoReport("请求服务器失败");
      }
    }

    if (router.query.uid) {
      const { uid, token, reportId } = router.query;
      fetchData(uid, token, reportId);
    }
  }, [router.query]);

  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      if (reportData === undefined) return true;
      const socreInfo = {
        create: reportData.create,
        score: reportData.data.summary.list[0].value,
      };

      const sendSuc = postMessageToMiniPrograms({
        data: { action: "update_score", ...socreInfo },
      });

      if (sendSuc) {
        return false;
      }

      return true;
    });
  }, [reportData]);

  return { reportData, noReport, expand, setExpand };
};

export default useReportResult;
