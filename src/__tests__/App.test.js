import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App home screen", () => {
  it("renders displaying the title", () => {
    render(<App />);
    expect(
      screen.getByText("Global Covid Statistics Dashboard")
    ).toBeInTheDocument();
  });
});
