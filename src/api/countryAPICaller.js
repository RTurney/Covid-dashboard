
  export const fetchCountriesCovidData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries");
    const data = response.json();
    return data;
  };