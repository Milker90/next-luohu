const jiaoYuValues = [
  {
    label: "不满足教育背景积分条件",
    value: 0,
    sorce: 0,
  },
  {
    label: "大学专科(含高职)",
    value: 1,
    sorce: 10.5,
  },
  {
    label: "只取得大学本科学历",
    value: 2,
    sorce: 10.5,
  },
  {
    label: "只取得学士学位",
    value: 3,
    sorce: 10.5,
  },
  {
    label: "大学本科学历并取得学士学位",
    value: 4,
    sorce: 15,
  },
  {
    label: "只取得硕士研究生学历",
    value: 5,
    sorce: 15,
  },
  {
    label: "硕士研究生学历并取得硕士学位",
    value: 6,
    sorce: 26,
  },
  {
    label: "只取得博士研究生学历",
    value: 7,
    sorce: 26,
  },
  {
    label: "只取得博士学位",
    value: 8,
    sorce: 26,
  },
  {
    label: "博士研究生学历并取得博士学位",
    value: 9,
    sorce: 37,
  },
];

const workAndJuzhuValues = [
  {
    label: "不满足该项",
    value: 0,
    score: 0,
  },
  {
    label: "满1年",
    score: 3,
    value: 1,
  },
  {
    label: "满2年",
    score: 6,
    value: 2,
  },
  {
    label: "满3年",
    score: 9,
    value: 3,
  },
  {
    label: "满4年及以上",
    score: 12,
    value: 4,
  },
];

const onlyJuzhuValues = [
  {
    label: "不满足该项",
    score: 0,
    value: 0,
  },
  {
    label: "满1年",
    score: 2,
    value: 1,
  },
  {
    label: "满2年",
    score: 4,
    value: 2,
  },
  {
    label: "满3年",
    score: 6,
    value: 3,
  },
  {
    label: "满4年",
    score: 8,
    value: 4,
  },
  {
    label: "满5年",
    score: 10,
    value: 5,
  },
  {
    label: "满6年及以上",
    score: 12,
    value: 6,
  },
];

const chuangYeChuangXinValues1 = [
  {
    label: "积12分",
    score: 12,
    value: 0,
  },
  {
    label: "积11分",
    score: 11,
    value: 1,
  },
  {
    label: "积10分",
    score: 10,
    value: 2,
  },
  {
    label: "积9分",
    score: 9,
    value: 3,
  },
  {
    label: "积8分",
    score: 8,
    value: 4,
  },
  {
    label: "积6分",
    score: 6,
    value: 5,
  },
  {
    label: "积5分",
    score: 5,
    value: 6,
  },
  {
    label: "积4分",
    score: 4,
    value: 7,
  },
  {
    label: "积2分",
    score: 2,
    value: 8,
  },
];

const chuangYeChuangXinValues2 = [
  {
    label: "积12分",
    score: 12,
    value: 0,
  },
  {
    label: "积10分",
    score: 10,
    value: 1,
  },
  {
    label: "积9分",
    score: 9,
    value: 2,
  },
  {
    label: "积8分",
    score: 8,
    value: 3,
  },
  {
    label: "积6分",
    score: 6,
    value: 4,
  },
  {
    label: "积4分",
    score: 4,
    value: 5,
  },
  {
    label: "积3分",
    score: 3,
    value: 6,
  },
  {
    label: "积2分",
    score: 2,
    value: 7,
  },
  {
    label: "积1分",
    score: 1,
    value: 8,
  },
];

const chuangYeChuangXinValues3 = [
  {
    label: "4000万元（含）以上",
    score: 6,
    value: 0,
  },
  {
    label: "2000万元（含）～ 4000万元",
    score: 4,
    value: 1,
  },
  {
    label: "500万元（含）～ 2000万元",
    score: 2,
    value: 2,
  },
];

const naShuiValues1 = [
  {
    label: "1年",
    score: 2,
    value: 0,
  },
  {
    label: "2年",
    score: 4,
    value: 1,
  },
  {
    label: "3年",
    score: 6,
    value: 2,
  },
];

const nianLingValues = [
  {
    label: "不超过45周岁",
    score: 20,
    value: 0,
  },
  {
    label: "45周岁以上不超过46周岁",
    score: 16,
    value: 1,
  },
  {
    label: "46周岁以上不超过47周岁",
    score: 12,
    value: 2,
  },
  {
    label: "47周岁以上不超过48周岁",
    score: 8,
    value: 3,
  },
  {
    label: "48周岁以上不超过49周岁",
    score: 4,
    value: 4,
  },
  {
    label: "49周岁以上",
    score: 0,
    value: 5,
  },
];

const rongYuBiaoZhangValues = [
  {
    label: "不符合荣誉表彰积分条件",
    value: 0,
    sorce: 0,
  },
  {
    label: "省部级以上劳动模范",
    value: 1,
    sorce: 20,
  },
  {
    label: "全国道德模范或首都道德模范",
    value: 2,
    sorce: 20,
  },
  {
    label: "全国见义勇为英雄模范或首都见义勇为好市民",
    value: 3,
    sorce: 20,
  },
];

module.exports = {
  jiaoYuValues,
  workAndJuzhuValues,
  onlyJuzhuValues,
  chuangYeChuangXinValues1,
  chuangYeChuangXinValues2,
  chuangYeChuangXinValues3,
  naShuiValues1,
  nianLingValues,
  rongYuBiaoZhangValues,
};
