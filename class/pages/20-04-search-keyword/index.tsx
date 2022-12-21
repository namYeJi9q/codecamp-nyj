// 키워드 입력하기  빨강색으로 키워드 표시
import { gql, useQuery } from "@apollo/client";
// import { debounce } from "lodash" 이렇게 쓰면 _.debounce로 바로 할수도 있다.
import _ from "lodash";
import React, { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
// docs에 나와있음. uuidv4라고 이름을 바꿔서 씀
import { v4 as uuidv4 } from "uuid";

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
  const [keyword, setKeyword] = useState("");

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

  const getDebounce = _.debounce((value) => {
    // 마지막에 리패치 한 번 요청
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  // 체인지 일어날때 실행할 함수
  // target과 currentTarget은 버블링이 일어날때는 구분해서 해주고 지금은 둘 다 상관없다.
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.target.value);
    getDebounce(event.currentTarget.value);
    // 1초 안에 다른 걸 입력하면 리패치하지않고, 다른걸 입력하지 않으면 리패치 함 , 효율화
    // setTimeout(() => {
    //   도전해보자~ debouncing
    // }, 1000)
  };

  // 더 안전한 시크릿코드 (너무 길어지면 성능이 느려지기 때문에 고려해야한다.)
  const mySecretCode = uuidv4();

  return (
    <div>
      검색어입력 : <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          {/* 백앤드에서 타이틀로만 검색되게 만들어놔서 title에서 키워드를 찾아야함 / 이러면 강아지를 검색 시 강아지를 기준으로 양쪽을 자르고 다 span을 줘야한다. */}
          <span style={{ margin: "10px" }}>
            {el.title
              .replaceAll(keyword, `${mySecretCode}${keyword}${mySecretCode}`)
              .split(mySecretCode)
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? "red" : "black" }}
                >
                  {el}
                </span>
              ))}
          </span>
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
