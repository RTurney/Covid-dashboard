import { render, screen } from "@testing-library/react";
import { StatsTotals } from "../../../components/StatsComponents/Statistics";

const stats = {
  cases: 10,
  casesToday: 3,
  deaths: 2,
  deathsToday: 1
};

describe("StatTotals", () => {
  it("displays the total number of cases", () => {
    render(<StatsTotals
            cases={stats.cases}
            casesToday={0}
            deaths={0}
            deathsToday={0} />);
    expect(screen.getAllByText(stats.cases)).toBeTruthy();
  });

  it("displays the number of cases today", () => {
    render(<StatsTotals
            cases={0}
            casesToday={stats.casesToday}
            deaths={0}
            deathsToday={0} />);
    expect(screen.getAllByText(stats.casesToday)).toBeTruthy();
  });

  it("displays the number of total deaths", () => {
    render(<StatsTotals
            cases={0}
            casesToday={0}
            deaths={stats.deaths}
            deathsToday={0} />);
    expect(screen.getAllByText(stats.deaths)).toBeTruthy();
  });

  it("displays the number of deaths from today", () => {
    render(<StatsTotals
            cases={0}
            casesToday={0}
            deaths={0}
            deathsToday={stats.deathsToday} />);
    expect(screen.getAllByText(stats.deathsToday)).toBeTruthy();
  });
});
