import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  // 클릭하면 자바스크립트가 알아서 이벤트 자리에 이벤트 넣어줌 빈캄이여도 됨
  const onClickPage = (page: Number) => () => {
    void refetch({ page });
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.contents}</span>
        </div>
      ))}

      {new Array(10).fill("철수").map((_, index) => (
        <span
          key={index + 1}
          id={String(index + 1)}
          onClick={onClickPage(index + 1)}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}
