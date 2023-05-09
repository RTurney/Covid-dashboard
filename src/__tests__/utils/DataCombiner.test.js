import { combineCountryData, combineContinentData } from "../../components/utils";

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

const mockContinentGeoJsonData = [
  {
    properties: {
      continent: "middleearth"
    },
    counties: [
      "Shire",
      "Gondor",
      "Rohan",
      "Mordor"
    ]
  },
  {
    properties: {
    continent: "tamriel"
    },
    counties: [
      "Skyrim",
      "Elsyweir"
    ]
  }
]

const mockContinentAPIData = [
  {
    continent: "Middle Earth",
    cases: 10000,
    todayCases: 20,
    deaths: 5000,
    todayDeaths: 10,
    casesPerOneMillion: 100,
    deathsPerOneMillion: 50,
    population: 1000,
  }
]

describe("combineCountryData ", () => {
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

describe("combineContinentData ", () => {
  const result = combineContinentData(mockContinentAPIData, mockContinentGeoJsonData);

  it("will return an array", () => {
    expect(Array.isArray(result)).toBeTruthy();
  })

  it("will return the combined data if continent name's matched", () => {
    expect(result[0].continent).toEqual(mockContinentAPIData[0].continent);
    expect(result[0].counties).toEqual(mockContinentGeoJsonData[0].counties);
  })

  it("will return a continent with default parameters if no continent is matched", () => {
    expect(result[1].cases).toEqual("N/A")
  })
})