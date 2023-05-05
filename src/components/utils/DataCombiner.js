import { colourByCases, colourByCasesPerMill } from "./MapColourSelector";

export const combineCountryData = (countryAPIData, geojsonData) => {
  const combinedData = geojsonData.map((country) => {
    country.country = "";
    country.cases = "N/A";
    country.todayCases = "N/A";
    country.deaths = "N/A";
    country.todayDeaths = "N/A";
    country.casesPerOneMillion = "N/A";
    country.deathsPerOneMillon = "N/A";
    country.population = "N/A";
    country.caseColour = "white";
    country.casesPerMillColour = "white";
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
        country.caseColour = colourByCases(covidCountry);
        country.casesPerMillColour = colourByCasesPerMill(covidCountry.casesPerOneMillion);
      }
    }
    return country;
  });
  return combinedData;
};