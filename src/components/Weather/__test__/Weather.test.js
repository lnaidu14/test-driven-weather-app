import React from "react";
import Weather from "../Weather";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("tests for weather component", () => {
  let getByTestId;
  beforeEach(() => {
    const component = render(<Weather />);
    getByTestId = component.getByTestId;
  });

  it("should test if header is correct", () => {
    const header = getByTestId("header");

    expect(header.textContent).toBe("Weather App");
  });

  it("should test if city-name-input is initially an empty string", () => {
    const cityInput = getByTestId("city-name-input");

    expect(cityInput.textContent).toBe("");
  });

  it("should test if the button renders with 'Search' text", () => {
    const searchBtn = getByTestId("search-btn");

    expect(searchBtn.textContent).toBe("Search");
  });

  it("should test if city name is appearing on screen after entering it in input field and pressing 'Search' ", () => {
    const cityInput = getByTestId("city-name-input");
    const searchBtn = getByTestId("search-btn");
    const cityNameDisp = getByTestId("city-name-disp");
    const cityName = "Ottawa";

    fireEvent.change(cityInput, {
      target: {
        value: cityName,
      },
    });

    fireEvent.click(searchBtn);

    expect(cityNameDisp.textContent).toBe(cityName);
  });
});
