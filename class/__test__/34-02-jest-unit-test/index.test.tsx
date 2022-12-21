// render로 그리고 screen으로 검즘
import { render, screen } from "@testing-library/react";
import JestUnitTest from "../../pages/34-02-jest-unit-test";
// 돔에 그리는게 아닌 제스트 돔에 그려야하기 때문에 import 해줌
import "@testing-library/jest-dom";

it("내가 원하는대로 그려지는지 테스트하기", () => {
  render(<JestUnitTest />);

  const myText = screen.getByText("철수는 13살 입니다.");
  expect(myText).toBeInTheDocument();

  const myText2 = screen.getByText("철수의 취미 입력하기:");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("철수랑 놀러가기");
  expect(myText3).toBeInTheDocument();
});
