const { rank2019 } = require("./ranks");

function calRank(score, yearVersion) {
  if (yearVersion === 2019) {
    let findIndex = undefined;
    for (let index = 0; index < rank2019.length; index++) {
      const item = rank2019[index];
      if (item.score <= score) {
        findIndex = index;
        break;
      }
    }

    if (findIndex === undefined || findIndex === rank2019.length - 1) {
      // 最后一个
      return [rank2019[rank2019.length - 1].rank, Infinity];
    } else if (findIndex === 0) {
      return [0, rank2019[findIndex].rank];
    } else {
      return [rank2019[findIndex - 1].rank, rank2019[findIndex].rank];
    }
  } else {
    return null;
  }
}

module.exports = {
  calRank,
};

// console.log(calRank(79.13, 2019));
