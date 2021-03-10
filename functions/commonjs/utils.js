function calNianLingLevel(birthday, year) {
  const age = calNianLing(birthday, year);
  console.log(age);
  if (age <= 45) {
    return 0;
  } else if (age > 45 && age <= 46) {
    return 1;
  } else if (age > 46 && age <= 47) {
    return 2;
  } else if (age > 47 && age <= 48) {
    return 3;
  } else if (age > 48 && age <= 49) {
    return 4;
  } else if (age > 49) {
    return 5;
  } else {
    return -1;
  }
}

function calNianLing(birthday, year) {
  const b = new Date(birthday);
  const birthYear = b.getFullYear();
  const month = b.getMonth() + 1;
  const day = b.getDate();

  if (month === 1 && day === 1) {
    return year - birthYear;
  } else {
    return year - birthYear - 1;
  }
}

function forecastResultLevelToStr(level) {
  if (level === 10) {
    return "45周岁前落户成功";
  } else if (level === 20) {
    return "45周岁前有机会落户成功";
  } else {
    return "45周岁前落户失败";
  }
}

function forecastResultLevel(minYear, maxYear, year45) {
  if (maxYear !== Infinity) {
    if (maxYear <= year45) {
      return 10;
    } else if (minYear > year45) {
      return 30;
    } else {
      return 20;
    }
  } else {
    if (minYear === Infinity) {
      return 30;
    }

    if (minYear < year45) {
      return 20;
    } else {
      return 30;
    }
  }
}

function forecastResult(minYear, maxYear, year45) {
  const reportResultLevel = forecastResultLevel(minYear, maxYear, year45);
  const reportResultDes = forecastResultLevelToStr(reportResultLevel);

  return {
    reportResultLevel,
    reportResultDes,
  };
}

function forecastStringResult(reportResultDes) {
  return {
    reportResultLevel: 10,
    reportResultDes,
  };
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

function formatNumber(n) {
  if (isFloat(n)) {
    return n.toFixed(2);
  }
  return n;
}

module.exports = {
  formatNumber,
  calNianLing,
  calNianLingLevel,
  forecastResult,
  forecastStringResult,
};

// const nianLing = calNianLing("1985-10-31T16:00:00.000Z", 2019);
// console.log("=======3 age =" + nianLing);
// console.log(45 - nianLing);

// console.log(calNianLingLevel("1985-08-17T16:00:00.000Z", 2019));
// console.log(forecastResultDes(12, Infinity, 11));

console.log(formatNumber(76.1));
