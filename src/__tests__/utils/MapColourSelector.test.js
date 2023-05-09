import {colourByCases, colourByCasesPerMill} from '../../components/utils';

describe("Colour by cases util ", () => {
  it("returns #ffffff by default", () => {
    expect(colourByCases()).toBe("#ffffff");
  })

  it("returns #ff9999 for cases between 0 and 50,000", () => {
    expect(colourByCases(0)).toBe("#ff9999");
  })

  it("returns #ff6666 for cases between 50,000 and 100,000", () => {
    expect(colourByCases(50000)).toBe("#ff6666");
  })

  it("returns #ff0000 for cass between 100,000 and 199,999", () => {
    expect(colourByCases(100000)).toBe("#ff0000");
  })

  it("returns #e60000 for cases between 200,000 and 500,000", () => {
    expect(colourByCases(200000)).toBe("#e60000")
  })

  it("returns #b300000 for cases between 500,000 and 1,000,000", () => {
    expect(colourByCases(500000)).toBe("#b30000");
  })

  it("returns #800000 for cases over 1,000,000", () => {
    expect(colourByCases(1000000)).toBe("#800000");
  })
})


describe("Colour by cases per mill util ", () => {
  it("returns #ffffff by default", () => {
    expect(colourByCasesPerMill()).toBe("#ffffff");
  })

  it("returns #ff9999 for cases between 0 and 999", () => {
    expect(colourByCasesPerMill(0)).toBe("#ff9999");
  })

  it("returns #ff6666 for cases between 1000 and 9,999", () => {
    expect(colourByCasesPerMill(1000)).toBe("#ff6666");
  })

  it("returns #ff0000 for cass between 10,000 and 99,999", () => {
    expect(colourByCasesPerMill(10000)).toBe("#ff0000");
  })

  it("returns #e60000 for cases between 100,000 and 199,999", () => {
    expect(colourByCasesPerMill(100000)).toBe("#e60000")
  })

  it("returns #b300000 for cases between 200,000 and 499,999", () => {
    expect(colourByCasesPerMill(200000)).toBe("#b30000");
  })

  it("returns #800000 for cases between 500,000 and 1,000,000", () => {
    expect(colourByCasesPerMill(500000)).toBe("black");
  })
})