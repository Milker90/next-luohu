const { calRank } = require("./calRank");
const {
  calNianLing,
  forecastResult,
  forecastStringResult,
} = require("./utils");

const Report = {
  create(scoreInput, resultScore) {
    const {
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
    } = resultScore;

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
      birthday,
      nianLingLevel,
      rongYuBiaoZhangLevel,
      noShouFaNum,
      yearVersion,
    } = scoreInput;

    const rank = calRank(score, yearVersion);
    let rankValue = "";
    if (rank[1] === Infinity) {
      rankValue = `${rank[0]}名以后`;
    } else {
      rankValue = `${rank[0]}-${rank[1]}`;
    }
    const nianLing = calNianLing(birthday, yearVersion);
    const remainderNianLing = 45 - nianLing;
    const remainderZhiZhuScore = Math.max(12 - rzhiZhuScore, 0);
    const apply45 = yearVersion + remainderNianLing + 1;
    const summary = {
      title: "2019年积分",
      list: [
        {
          title: "分数",
          value: score,
        },
        {
          title: "预计排名",
          value: rankValue,
        },
        {
          title: "剩余职住积分",
          value: remainderZhiZhuScore,
        },
        {
          title: "剩余积分年",
          value: `${remainderNianLing}年`,
        },
        {
          title: "45周岁申请年",
          value: `${apply45}年`,
        },
      ],
    };

    const calDetail = {
      title: "积分计算详情",
      list: [
        {
          title: "合法稳定就业",
          value: rjiuyeScore,
        },
        {
          title: "合法稳定住所",
          value: rzhuSuoScore,
        },
        {
          title: "教育背景",
          value: rjiaoYuScore,
        },
        {
          title: "取得学历(学位)扣除分值",
          value: rjiaoYuKouChu,
        },
        {
          title: "职住区域",
          value: rzhiZhuScore,
        },
        {
          title: "创新创业",
          value: rchuangYeScore,
        },
        {
          title: "纳税",
          value: rnaShuiScore,
        },
        {
          title: "年龄",
          value: rnianLingScore,
        },
        {
          title: "荣誉表彰",
          value: rongYuScore,
        },
        {
          title: "守法记录",
          value: noShouFaScore,
        },
      ],
    };

    const jiuyeAndZhujuScore = 3 + (zhuSuoMonth > 0 ? 1 : 0.5);
    const jiuyeAndZhujuMostScore = jiuyeAndZhujuScore * remainderNianLing;
    const jiuyeAndZhujuValue = `${jiuyeAndZhujuScore}/年(最多${jiuyeAndZhujuMostScore})`;

    const addScorelist = [
      {
        title: "合法稳定就业和稳定住所",
        value: jiuyeAndZhujuValue,
      },
    ];

    if (!noUseZhiZhuQuYu) {
      let zhiZhuQuyuValue = "0/年";
      if (remainderZhiZhuScore > 0) {
        if (workAndJuzhuLevel > 0) {
          if (remainderZhiZhuScore > 3) {
            zhiZhuQuyuValue = `3/年(最多${remainderZhiZhuScore})`;
          } else {
            zhiZhuQuyuValue = `${remainderZhiZhuScore}/年(最多${remainderZhiZhuScore})`;
          }
        } else if (onlyJuzhuLevel > 0) {
          if (remainderZhiZhuScore > 2) {
            zhiZhuQuyuValue = `2/年(最多${remainderZhiZhuScore})`;
          } else {
            zhiZhuQuyuValue = `${remainderZhiZhuScore}/年(最多${remainderZhiZhuScore})`;
          }
        }
      }

      addScorelist.push({
        title: "职住区域",
        value: zhiZhuQuyuValue,
      });
    }

    const score45Value = (
      score +
      remainderZhiZhuScore +
      jiuyeAndZhujuMostScore
    ).toFixed(2);
    const personalStatus = {
      title: "个人现状",
      list: [
        {
          title: "加分项",
          list: addScorelist,
        },
        {
          title: "45周岁分值",
          gongShi:
            "公式：45周岁分值 = 某年分值 + 职住区域剩余分值 + 稳定就业和住所分值 * 剩余积分年",
          list: [
            {
              title: "45周岁分值",
              value: score45Value,
            },
            {
              title: "申请年",
              value: `${apply45}年`,
            },
          ],
        },
      ],
    };

    const beijingStatus = {
      title: "北京积分落户现状",
      list: [
        {
          title: "历年分数线",
          history: {
            titles: ["年份", "分数线", "申请人数", "落户人数", "录取率"],
            values: [
              [2018, 90.75, 124657, 6019, 4.828],
              [2019, 93.58, 106403, 6007, 5.645],
              [2020, 97.13, 122852, 6032, 4.909],
            ],
          },
          result: {
            title: "由上表得出如下数据:",
            data: {
              titles: ["#", "增长范围", "平均增长"],
              values: [
                ["分数线", "2.83 - 3.55", "3.19"],
                ["录取率", "4.828% - 5.645%", "5.127%"],
                ["落户人数", "6007 - 6032", "6019"],
              ],
            },
          },
        },
      ],
    };

    const applyYear = yearVersion + 1;
    const lastYearLuohuNum = 6032;
    const miniLuohuNum = 6007;
    const maxLuohuNum = 6032;
    const luohuByNumMin =
      applyYear + Math.ceil((rank[0] - lastYearLuohuNum) / maxLuohuNum);
    let luohuByNumValue = "";
    let luohuByNumMax = Infinity;
    if (rank[1] === Infinity) {
      luohuByNumValue = `${luohuByNumMin}年以后`;
    } else {
      luohuByNumMax =
        applyYear + Math.ceil((rank[1] - lastYearLuohuNum) / miniLuohuNum);
      luohuByNumValue = `${luohuByNumMin}年-${luohuByNumMax}年`;
    }
    const luohuByNumResult = forecastResult(
      luohuByNumMin,
      luohuByNumMax,
      apply45
    );

    let luohuByScoreYear = "";
    let luohuByScore = "";
    const minLuohuScore = 2.83;
    const maxLuohuScore = 3.55;
    const lastYearLuohuScore = 97.13;
    let zhiZhuQuyuAddScore = 0;
    if (!noUseZhiZhuQuYu) {
      if (workAndJuzhuLevel > 0) {
        zhiZhuQuyuAddScore = 3;
      } else if (onlyJuzhuLevel > 0) {
        zhiZhuQuyuAddScore = 2;
      }
    }

    let luohuByScoreYearMin = Infinity;
    let luohuByScoreYearMax = Infinity;
    let luohuByScoreMin = Infinity;
    let luohuByScoreMax = Infinity;
    for (let index = 1; index < 1000; index++) {
      const tzhiZhuQuyuAddScore = Math.min(
        index * zhiZhuQuyuAddScore,
        remainderZhiZhuScore
      );
      if (
        lastYearLuohuScore + index * minLuohuScore <=
        score + jiuyeAndZhujuScore * index + tzhiZhuQuyuAddScore
      ) {
        luohuByScoreYearMin = index;
        break;
      }
    }

    if (luohuByScoreYearMin === Infinity) {
      luohuByScoreYear = "无限年";
      luohuByScore = "无限年";
    } else {
      for (let index = 1; index < 1000; index++) {
        const tzhiZhuQuyuAddScore = Math.min(
          index * zhiZhuQuyuAddScore,
          remainderZhiZhuScore
        );
        if (
          lastYearLuohuScore + index * maxLuohuScore <=
          score + jiuyeAndZhujuScore * index + tzhiZhuQuyuAddScore
        ) {
          luohuByScoreYearMax = index;
          break;
        }
      }

      luohuByScoreMin = applyYear + luohuByScoreYearMin;
      if (luohuByScoreYearMax === Infinity) {
        luohuByScoreYear = `${luohuByScoreYearMin}年-无限年`;
        luohuByScore = `${luohuByScoreMin}年-无限年`;
      } else {
        luohuByScoreMax = applyYear + luohuByScoreYearMax;
        luohuByScoreYear = `${luohuByScoreYearMin}年-${luohuByScoreYearMax}年`;
        luohuByScore = `${luohuByScoreMin}年-${luohuByScoreMax}年`;
      }
    }
    const luohuByScoreResult = forecastResult(
      luohuByScoreMin,
      luohuByScoreMax,
      apply45
    );

    // 平均增长分数
    const luohuSuccessAddScoreEveryYear = (
      (score45Value - lastYearLuohuScore) /
      remainderNianLing
    ).toFixed(2);
    const luohuSuccessAddScoreResult = forecastStringResult(
      `如果分数线平均每年增长少于${luohuSuccessAddScoreEveryYear}，则在45周岁前能落户成功`
    );

    const forecast = {
      title: "预测落户年",
      list: [
        {
          title: "按申请人数预测",
          gongShis: [
            "公式：上一次公开落户年 + (排名 - 上一次公开落户录取人数) / 历年录取人数 = 落户年",
          ],
          list: [
            {
              title: "落户年",
              value: luohuByNumValue,
            },
          ],
          ...luohuByNumResult,
        },
        {
          title: "按分数线预测",
          gongShis: [
            "公式1：(上一次公开落户年分数线 + 年限Y * 分数线增长分数）小于或等于 (上一次公开落户年个人分值 + 年限Y * 个人增长分数 + 职住区域剩余分值)",
            "公式2：上一次公开落户年 + 年限Y = 落户年",
          ],
          list: [
            {
              desTitle: "由公式1得出",
              title: "年限Y",
              value: luohuByScoreYear,
            },
            {
              desTitle: "由公式2得出",
              title: "落户年",
              value: luohuByScore,
            },
          ],
          ...luohuByScoreResult,
        },
        {
          title: "计算落户成功的平均增长分数",
          gongShis: [
            "公式： (45周岁分值 - 上一次公开落户年分数线) / 剩余积分年 = 落户成功的平均增长分数",
          ],
          list: [
            {
              title: "平均增长分数",
              value: luohuSuccessAddScoreEveryYear,
            },
          ],
          ...luohuSuccessAddScoreResult,
        },
      ],
    };

    return {
      summary,
      calDetail,
      personalStatus,
      beijingStatus,
      forecast,
    };
  },
};

module.exports = {
  Report,
};
