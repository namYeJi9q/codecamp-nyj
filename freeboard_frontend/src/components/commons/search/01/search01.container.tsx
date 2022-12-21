import { ApolloQueryResult } from "@apollo/client";
import _ from "lodash";
import React, { ChangeEvent } from "react";
import * as S from "./search01.styles";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

interface ISearch01Props {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onChangeKeyword: (value: string) => void;
}

export default function Search01Page(props: ISearch01Props) {
  const getDebounce = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 500);

  // 체인지 일어날때 실행할 함수
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <S.SearchWrap>
      <S.SearchBox type="text" onChange={onChangeSearch} placeholder="Search" />
      <S.SearchIcon />
    </S.SearchWrap>
  );
}
