import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export const useQueryFetchBoardsCount = () => {
  const query = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS_COUNT);

  return query;
};
