export const fetchStatistics = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/all");
  const data = response.json();
  return data;
};
