import React from "react";
import { render } from "@testing-library/react";
import locationDetails from "../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <locationDetails city="Manchester" country="UK" />
    );

    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  });
});
