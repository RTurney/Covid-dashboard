  export const fetchContinentsCovidData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/continents");
    const data = response.json();
    return data;
  };