import axios from "../utils/request";

export async function requestCreateReport(params) {
  return axios.post("/create-report", params);
}

export async function requestReportResult(params) {
  return axios.post("https://h5.nicepq.com/report-result", params);
}
