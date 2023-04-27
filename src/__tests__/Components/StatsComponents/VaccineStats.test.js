import { render, screen } from "@testing-library/react";
import { VaccineStats } from "../../../components/StatsComponents/Statistics";

const mockVaccineStats = [
  {
    country: "Faketopia",
    timeline: [
      { total: 101 }
    ]
  }
];

describe("Vaccine stats component", () => {
  it("returns the country name", () => {
    render(<VaccineStats vaccineData={mockVaccineStats}/>);
    expect(screen.getByText(mockVaccineStats[0].country)).toBeTruthy();
  });

  it("displays the total number of vaccinations for a country", () => {
    render(<VaccineStats vaccineData={mockVaccineStats}/>);
    expect(screen.getByText("Total Vaccinations: 101")).toBeTruthy();
  });
});
