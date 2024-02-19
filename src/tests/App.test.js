// import React from "react";
// import { render, screen } from "@testing-library/react";
// import App from "../components/App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Weather App/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render, screen } from "@testing-library/react";
import App from "../components/App";
import forecast from "../data/forecast.json";

describe("App", () => {
  test("renders App component correctly", () => {
    render(<App location={forecast.location} />);
    const h1Element = screen.getByText(/Manchester, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});
