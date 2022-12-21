import { getDate } from "../../../../commons/libraries/utils";
import BoardPaginationStartPage from "../../../commons/pagination/pagination.container";

import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import Search01Page from "../../../commons/search/01/search01.container";

export default function BoardListUI(props: IBoardListUIProps) {
  const mySecretCode = uuidv4();

  return (
    <S.Wrapper>
      <S.InnerWapper>
        <S.SearchWrap>
          <S.TableCount>게시글 {props.count}개</S.TableCount>
          <Search01Page
            refetch={props.refetch}
            refetchBoardsCount={props.refetchBoardsCount}
            onChangeKeyword={props.onChangeKeyword}
          />
        </S.SearchWrap>
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        </S.Row>
        {props.data?.fetchBoards.map((el, index) => (
          <S.Row key={el._id}>
            <S.ColumnBasic>
              {String(el._id).slice(-4).toUpperCase()}
            </S.ColumnBasic>
            {/*  id={el._id}  이게 있어야 게시글이 열림. */}
            <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title
                .replaceAll(
                  props.keyword,
                  `${mySecretCode}${props.keyword}${mySecretCode}`
                )
                .split(mySecretCode)
                .map((el) => (
                  <span
                    key={mySecretCode}
                    style={{ color: el === props.keyword ? "red" : "black" }}
                  >
                    {el}
                  </span>
                ))}
            </S.ColumnTitle>
            <S.ColumnBasic>{el.writer}</S.ColumnBasic>
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
        <S.Footer>
          <BoardPaginationStartPage
            refetch={props.refetch}
            count={props.count}
          />
          <S.Button onClick={props.onClickMoveToBoardNew}>
            <S.PencilIcon src="/images/board/list/write.png" />
            게시물 등록하기
          </S.Button>
        </S.Footer>
      </S.InnerWapper>
    </S.Wrapper>
  );
}
