import { colourByCases } from "./MapColourSelector";

export const combineCountryData = (countryAPIData, geojsonData) => {
  const combinedData = geojsonData.map((country) => {
    country.country = "";
    country.cases = null;
    country.todayCases = null;
    country.deaths = null;
    country.todayDeaths = null;
    country.casesPerOneMillion = null;
    country.deathsPerOneMillon = null;
    country.population = null;
    country.fillColour = "";
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
        country.fillColour = colourByCases(covidCountry);
      }
    }
    return country;
  });
  return combinedData;
};