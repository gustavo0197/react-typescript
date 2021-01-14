import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Hello } from "./Hello";

describe("Hello component", () => {
  let component: RenderResult = render(<div></div>);

  beforeEach(() => {
    component = render(<Hello />);
  });

  test("Shoul have a title", () => {
    const title = component.getByText("Hello from Parcel and React");

    expect(title.tagName).toBe("H2");
  });
});
