import { combineCountryData } from "../../components/utils";

const mockCountryGeoJsonData = [
  {
    properties: {
      ISO_A3: "MSK"
    },
    Head_of_country: "Princess Peach",
    Advisor: "Toad",
    symbol: "Mushroom"
  },
  {
    properties: {
      ISO_A3: "KKD"
    },
    Head_of_country: "Bowser",
    Advisor: "Kamek",
    symbol: "Bowser"
  }
]

const mockCountryAPIData = [
  {
    countryInfo: {
      iso3: "MSK"
    },
    country: "Mushroom Kingdom",
    cases: 1000,
    todayCases: 2,
    deaths: 500,
    todayDeaths: 1,
    casesPerOneMillion: 10,
    deathsPerOneMillion: 5,
    population: 100,
  }
]

describe("combineCountryData util ", () => {
  const result = combineCountryData(mockCountryAPIData, mockCountryGeoJsonData);


  it("will return an array", () => {
    expect(Array.isArray(result)).toBeTruthy();
  })

  it("will return the combined data if countries have a matching iso3", () => {
    expect(result[0].country).toEqual(mockCountryAPIData[0].country);
    expect(result[0].Head_of_country).toEqual(mockCountryGeoJsonData[0].Head_of_country);
  })

  it("will return a country with default parameters if no matching iso3 is found", () => {
    expect(result[1].cases).toEqual("N/A");
  })
})