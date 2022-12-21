// render로 그리고 screen으로 검즘
import { fireEvent, render, screen } from "@testing-library/react";
import JestUnitTest from "../../pages/34-04-jest-unit-test-event";
// 돔에 그리는게 아닌 제스트 돔에 그려야하기 때문에 import 해줌
import "@testing-library/jest-dom";

it("버튼을 눌렀을 때, 제대로 작동하는지 테스트하자!", () => {
  render(<JestUnitTest />);

  // 인풋 입력 fireEvent
  fireEvent.click(screen.getByRole("count-button"));
  // expect는 기대한다
  expect(screen.getByRole("count")).toHaveTextContent("1");
});
