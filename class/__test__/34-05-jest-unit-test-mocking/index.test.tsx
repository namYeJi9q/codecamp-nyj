// render로 그리고 screen으로 검즘
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// 돔에 그리는게 아닌 제스트 돔에 그려야하기 때문에 import 해줌
import "@testing-library/jest-dom";
import GraphqlMutationPage, {
  나의그래프큐엘셋팅,
} from "../../pages/34-05-jest-unit-test-mocking";
import { MockedProvider } from "@apollo/client/testing";
import { useRouter } from "next/router";

// 1. 가짜 useRouter 만들고, 그 안에 가짜 push 넣어놓기
jest.mock("next/router", () => ({
  // useRouter를 제스트의 함수로 대체한다.
  useRouter: jest.fn(),
}));

// 2. 이 가짜 push를 useRouter에 집어넣어주어야함
const push = jest.fn();

// 3. 가짜 useRouter에 가짜 push 집어 넣기
(useRouter as jest.Mock).mockImplementation(() => ({
  push,
}));

// 가짜 mutation 만들기(요청, 응답 모두
const mocks = [
  {
    request: {
      query: 나의그래프큐엘셋팅,
      variables: {
        createBoardInput: {
          writer: "철수",
          title: "안녕하세요",
          contents: "반갑습니다",
          password: "1234",
        },
      },
    },
    result: {
      data: {
        createBoard: {
          _id: "qqq",
          wirter: "철수",
          title: "안녕하세요",
          contents: "반갑습니다",
        },
      },
    },
  },
];

it("버튼을 눌렀을 때, 제대로 작동하는지 테스트하자!", async () => {
  render(
    <MockedProvider mocks={mocks}>
      <GraphqlMutationPage />
    </MockedProvider>
  );

  // 타이핑은 change
  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "철수" },
  });

  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "안녕하세요" },
  });

  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "반갑습니다" },
  });

  // TDD  => 테스트를 먼저 만들자
  fireEvent.change(screen.getByRole("input-password"), {
    target: { value: 1234 },
  });

  fireEvent.click(screen.getByRole("submit-button"));

  await waitFor(() => {
    expect(push).toBeCalledWith("/boards/qqq");
  });
});
