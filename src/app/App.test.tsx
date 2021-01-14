import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { App } from "./App";
import { StoreWrapper } from "store";

describe("App component", () => {
  let component: RenderResult = render(<div></div>);

  beforeEach(() => {
    component = render(
      <StoreWrapper>
        <App />
      </StoreWrapper>
    );
  });

  test("Initial counter value should be 0", () => {
    const counter = component.getByTestId("counter-result");
    expect(counter.textContent).toBe("0");
  });

  test("Should have a - button", () => {
    const minusButton = component.getByTestId("counter-minus-button");
    const counter = component.getByTestId("counter-result");
    minusButton.click();

    expect(minusButton.textContent).toBe("-");
    expect(counter.textContent).toBe("-1");
  });

  test("Should have a + button", () => {
    const plusButton = component.getByTestId("counter-plus-button");
    const counter = component.getByTestId("counter-result");
    plusButton.click();
    plusButton.click();

    expect(plusButton.textContent).toBe("+");
    expect(counter.textContent).toBe("1");
  });
});
