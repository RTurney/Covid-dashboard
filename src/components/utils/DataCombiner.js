
export const combineCountryData = (countryAPIData, geojsonData) => {
  const combinedData = geojsonData.map((country) => {
    country.country = "";
    country.cases = 0;
    country.todayCases = 0;
    country.deaths = 0;
    country.todayDeaths = 0;
    country.casesPerOneMillion = 0;
    country.deathsPerOneMillon = 0;
    country.population = 0;
    for (let i = 0; i < countryAPIData.length; i++) {
      const covidCountry = countryAPIData[i];
      if (covidCountry.countryInfo.iso3 === country.properties.ISO_A3) {
        country.country = covidCountry.country;
        country.cases = covidCountry.cases;
        country.todayCases = covidCountry.todayCases;
        country.deaths = covidCountry.deaths;
        country.todayDeaths = covidCountry.todayDeaths;
        country.casesPerOneMillion = covidCountry.casesPerOneMillion;
        country.deathsPerOneMillon = covidCountry.deathsPerOneMillon;
        country.population = covidCountry.population;
      }
    }
    return country;
  });
  return combinedData;
};