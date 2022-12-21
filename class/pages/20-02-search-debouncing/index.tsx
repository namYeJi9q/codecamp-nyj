// 버튼 없이 검색어를 입력하면 리패치가 나가야함
import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  // const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
    //  검색에서 리패치할 때, 사용한 서치 검색어가 저장되어 있는 상태이므로 추가로 서치 포함하지 않아도 됨.
  };

  // 검색하기 클릭시 실행할 함수
  // const onClickSearch = () => {
  //   // 패치 된게 있는데 이를 다시 리패치 해줘야함
  //   // 우리가 패치한 걸 점심이라는 키워드로 리패치한다는 뜻 , 1page를 암시
  //   void refetch({ search, page: 1 });
  // };

  // 체인지 일어날때 실행할 함수
  // target과 currentTarget은 버블링이 일어날때는 구분해서 해주고 지금은 둘 다 상관없다.
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.target.value);
    void refetch({ search: event.currentTarget.value, page: 1 });
    // 1초 안에 다른 걸 입력하면 리패치하지않고, 다른걸 입력하지 않으면 리패치 함 , 효율화
    // debounc 직접 만들기
    // setTimeout(() => {
    //   도전해보자~ debouncing
    // }, 1000)
  };
  return (
    <div>
      검색어입력 : <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.contents}</span>
        </div>
      ))}
      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
