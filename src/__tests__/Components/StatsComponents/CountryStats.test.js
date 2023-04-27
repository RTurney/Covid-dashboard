import { render, screen } from "@testing-library/react";
import { CountryStats } from "../../../components/StatsComponents/Statistics";

const mockCountryData = [
  {
    country: "Rapture",
    cases: 1200,
    deaths: 973
  }
];

describe("Country Stats", () => {
  it("displays the country name", () => {
    render(<CountryStats
            countryData={mockCountryData}/>);
    expect(screen.getByText(mockCountryData[0].country)).toBeTruthy();
  });

  it("displays the total number of cases", () => {
    render(<CountryStats
            countryData={mockCountryData}/>);
    expect(screen.getByText("Total cases: 1200")).toBeTruthy();
  });

  it("displays the total number of deaths", () => {
    render(<CountryStats
            countryData={mockCountryData}/>);
    expect(screen.getByText("Total deaths: 973")).toBeTruthy();
  });
});
