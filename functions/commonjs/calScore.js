const {
  jiaoYuValues,
  onlyJuzhuValues,
  workAndJuzhuValues,
  chuangYeChuangXinValues1,
  chuangYeChuangXinValues2,
  chuangYeChuangXinValues3,
  naShuiValues1,
  nianLingValues,
  rongYuBiaoZhangValues,
} = require("./constants");

const { formatNumber } = require("./utils");

function calScore(scoreInput) {
  const {
    jiuyeMonth,
    zhuSuoMonth,
    jiaoYuLevel,
    jiaoYuSheBaoMonth,
    noUseZhiZhuQuYu,
    workAndJuzhuLevel,
    onlyJuzhuLevel,
    chuangYeChuangXinType,
    chuangYeChuangXinLevel,
    naShuiType,
    naShuiLevel,
    nashuiIllegal,
    nianLingLevel,
    rongYuBiaoZhangLevel,
    noShouFaNum,
  } = scoreInput;

  // 就业
  const rjiuyeScore = Math.round(jiuyeMonth * 0.25 * 100) / 100;

  // 住所
  let rzhuSuoScore = zhuSuoMonth / 12 + ((jiuyeMonth - zhuSuoMonth) * 0.5) / 12;
  rzhuSuoScore = Math.round(rzhuSuoScore * 100) / 100;

  // 教育
  const rjiaoYuScore = jiaoYuValues[jiaoYuLevel].sorce;
  const rjiaoYuKouChu =
    Math.round(jiaoYuSheBaoMonth * (0.25 + 0.5 / 12) * 100) / 100;

  // 职住
  let rzhiZhuScore = 0;
  if (!noUseZhiZhuQuYu)
    rzhiZhuScore = Math.min(
      12,
      workAndJuzhuValues[workAndJuzhuLevel].score +
        onlyJuzhuValues[onlyJuzhuLevel].score
    );

  // 创新
  let rchuangYeScore = 0;
  if (chuangYeChuangXinType === 1) {
    rchuangYeScore = chuangYeChuangXinValues1[chuangYeChuangXinLevel].score;
  } else if (chuangYeChuangXinType === 2) {
    rchuangYeScore = chuangYeChuangXinValues2[chuangYeChuangXinLevel].score;
  } else if (chuangYeChuangXinType === 3) {
    rchuangYeScore = chuangYeChuangXinValues3[chuangYeChuangXinLevel].score;
  }

  // 纳税
  let rnaShuiScore = 0;
  if (naShuiType === 1) {
    rnaShuiScore = naShuiValues1[naShuiLevel].score;
  }
  rnaShuiScore = rnaShuiScore - nashuiIllegal * 12;

  // 年龄
  const rnianLingScore = nianLingValues[nianLingLevel].score;

  // 荣誉
  const rongYuScore = rongYuBiaoZhangValues[rongYuBiaoZhangLevel].sorce;

  // 守法记录
  const noShouFaScore = noShouFaNum * 30;

  let score =
    Math.round(
      (rjiuyeScore +
        rzhuSuoScore +
        rjiaoYuScore -
        rjiaoYuKouChu +
        rzhiZhuScore +
        rchuangYeScore +
        rnaShuiScore +
        rnianLingScore +
        rongYuScore -
        noShouFaScore) *
        100
    ) / 100;

  return {
    rjiuyeScore,
    rzhuSuoScore,
    rjiaoYuScore,
    rjiaoYuKouChu,
    rzhiZhuScore,
    rchuangYeScore,
    rnaShuiScore,
    rnianLingScore,
    rongYuScore,
    noShouFaScore,
    score,
  };
}

module.exports = {
  calScore,
};
