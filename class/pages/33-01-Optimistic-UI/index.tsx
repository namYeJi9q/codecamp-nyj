import { useMutation, useQuery, gql } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUiPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: "639a7d25531bd200286b7836" } }
  );

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickLike = () => {
    void likeBoard({
      variables: { boardId: "639a7d25531bd200286b7836" },
      // refetchQueries: [{query: FETCH_BOARD, variables: { boardId: "639a7d25531bd200286b7836"}}]
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      // 캐시
      update: (cache, { data }) => {
        // cache.modity 기존에 있던것만 수정 가능
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "639a7d25531bd200286b7836" },
          data: {
            fetchBoard: {
              _id: "639a7d25531bd200286b7836",
              // 내부적으로 타입네임은 그래프큐엘 이름을 기존으로 한다.
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
        // data.likeBoard // 8이 들어온다.
      },
    });
  };
  return (
    <>
      <div>현재카운트(좋아요) : {data?.fetchBoard.likeCount} </div>
      <button onClick={onClickLike}>좋아요 올리기</button>
    </>
  );
}
