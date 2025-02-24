import React from "react";
import { render } from "@testing-library/react-native";
import CodeViewer from "../../../components/skyline/codeviewer";
import { skylineData } from "../../../data/skyline/kotlinskylinedata";

test("renders code correctly", () => {
  const { getByText } = render(<CodeViewer code={skylineData} />);
  expect(getByText(skylineData)).toBeTruthy();
});

test("does not render code as expected", () => {
  const { queryByText } = render(<CodeViewer code="while(true)" />);
  expect(queryByText(skylineData)).toBeNull(); // ✅ Use queryByText
});

test("does not render against incorrect output", () => {
  const { queryByText } = render(<CodeViewer code={skylineData} />);
  expect(queryByText("while(true)")).toBeNull(); // ✅ Use queryByText
});
