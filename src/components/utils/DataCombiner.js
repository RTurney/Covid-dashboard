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

export const combineContinentData = (continentAPIData, geoJsonData) => {
  const combinedData = geoJsonData.map((continent) => {
    continent.continent = "";
    continent.cases = "N/A";
    continent.todayCases = "N/A";
    continent.deaths = "N/A";
    continent.todayDeaths = "N/A";
    continent.casesPerOneMillion = "N/A";
    continent.deathsPerOneMillon = "N/A";
    continent.population = "N/A";
    continent.caseColour = "white";
    continent.casesPerMillColour = "white";
    for (let i = 0; i < continentAPIData.length; i++) {
      const covidcontinent = continentAPIData[i];
      if (covidcontinent.continent.toLowerCase().split(" ").join("") === continent.properties.continent) {
        continent.continent = covidcontinent.continent;
        continent.cases = covidcontinent.cases;
        continent.todayCases = covidcontinent.todayCases;
        continent.deaths = covidcontinent.deaths;
        continent.todayDeaths = covidcontinent.todayDeaths;
        continent.casesPerOneMillion = covidcontinent.casesPerOneMillion;
        continent.deathsPerOneMillon = covidcontinent.deathsPerOneMillon;
        continent.population = covidcontinent.population;
        continent.caseColour = colourByCases(covidcontinent);
        continent.casesPerMillColour = colourByCasesPerMill(covidcontinent.casesPerOneMillion);
      }
    }
    return continent;
  });
  return combinedData;
};
