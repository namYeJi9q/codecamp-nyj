import { ApolloQueryResult } from "@apollo/client";
import _ from "lodash";
import React, { ChangeEvent } from "react";
import * as S from "./search02.styles";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

interface ISearch02Props {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;

  onChangeKeyword: (value: string) => void;
}

export default function Search02Page(props: ISearch02Props) {
  const getDebounce = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 });
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
