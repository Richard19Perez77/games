import React from "react";
import { render } from "@testing-library/react-native";
import Skyline from "../../../app/skyline";
import { skylineData } from "../../../data/skyline/kotlinskylinedata";

test("Skyline renders CodeViewer and displays skylineData", () => {
  const { getByText } = render(<Skyline />);

  expect(getByText(skylineData)).toBeTruthy(); // ✅ Checks real output in UI
});

test("does not render against incorrect output", () => {
  const { queryByText } = render(<Skyline />);
  expect(queryByText("while(true)")).toBeNull(); // ✅ Use queryByText
});
