  export const fetchGraphData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=200");
    const data = response.json();
    return data;
  };