// for cases:
// no data = white
// 0 - 49,999 = #ff9999
// 50,000 - 99,999 = #ff6666
// 100,000 - 199,999 = #ff0000
// 200,000 - 499,999 = #e60000
// 500,000 - 999,999 = #b30000
// 100,000,000 + = #800000

export const colourByCases = (country) => {
  switch(true) {
    case country.cases >= 0 && country.cases < 50000:
      return "#ff9999";
    case country.cases >= 50000 && country.cases < 100000:
      return "#ff6666";
    case country.cases >= 100000 && country.cases < 199999:
      return "#ff0000";
    case country.cases >= 200000 && country.cases < 500000:
      return "#e60000";
    case country.cases >= 500000 && country.cases < 1000000:
      return "#b30000";
    case country.cases >= 1000000:
      return "#800000";
    default:
      return "#ffffff";
  }
};


export const colourByCasesPerMill = (casesPerMillion) => {
  switch (true) {
    case casesPerMillion >= 0 && casesPerMillion < 999:
      return "#ff9999";
    case casesPerMillion >= 1000 && casesPerMillion < 9999:
      return "#ff6666";
    case casesPerMillion >= 10000 && casesPerMillion < 99999:
      return "#ff0000";
    case casesPerMillion >= 100000 && casesPerMillion < 199999:
      return "#e60000";
    case casesPerMillion >= 200000 && casesPerMillion < 499999:
      return "#b30000";
    case casesPerMillion >= 500000 && casesPerMillion < 1000000000:
      return "black";
    default:
      return "#ffffff";
  }
};
