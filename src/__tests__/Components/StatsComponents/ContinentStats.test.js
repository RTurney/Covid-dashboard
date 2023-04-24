import { render, screen } from "@testing-library/react";
import { ContinentStats } from "../../../components/StatsComponents/Statistics";

let mockContinentData = [
    {
        continent: "Mushroom kingdom",
        cases: 12,
        deaths: 10
    }
]

describe("Continent Stats", () => {
    it("displays the continent name", () => {
        render(<ContinentStats 
            continentData={mockContinentData}/> )
        expect(screen.getByText(mockContinentData[0].continent)).toBeTruthy();
    })

    it("displays the total number of cases", () => {
        render(<ContinentStats 
            continentData={mockContinentData}/> )
        expect(screen.getByText("Total cases: 12")).toBeTruthy();       
    })

    it("displays the total number of deaths", () => {
        render(<ContinentStats 
            continentData={mockContinentData}/> )
        expect(screen.getByText("Total deaths: 10")).toBeTruthy();       
    })
})