import React from "react";
import { render } from "@testing-library/react-native";
import Home from "../../../app/index";

test("renders Memory in game list", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Memory")).toBeTruthy();
});

test("renders Skyline in game list", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Skyline")).toBeTruthy();
});

test("renders TicTacToe in game list", () => {
  const { getByText } = render(<Home />);
  expect(getByText("TicTacToe")).toBeTruthy();
});

test("renders TextCrawler in game list", () => {
  const { getByText } = render(<Home />);
  expect(getByText("TextCrawler")).toBeTruthy();
});

test("renders Breakout in game list", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Breakout")).toBeTruthy();
});

test("renders KhmerWords in game list", () => {
  const { getByText } = render(<Home />);
  expect(getByText("KhmerWords")).toBeTruthy();
});

test("renders Gradients in game list", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Gradients")).toBeTruthy();
});

test("renders SimonGame in game list", () => {
  const { getByText } = render(<Home />);
  expect(getByText("SimonGame")).toBeTruthy();
});

test("renders TextRPG in game list", () => {
  const { getByText } = render(<Home />);
  expect(getByText("TextRPG")).toBeTruthy();
});