import React from "react";
import { render } from "@testing-library/react";
import ReactComp1 from "./ReactComp1";

test("renders the correct text", () => {
  const { getByText } = render(<ReactComp1 text="testas testukas" />);
  expect(getByText("testas testukas")).toBeInTheDocument();
});
