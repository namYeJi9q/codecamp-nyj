import { getDate } from '../../../../commons/libraries/utils';
import * as S from './BoardCommentList.styles'
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import QQQ from './qqq';

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  
  const click1 = (event) => {
    alert("1")
  }
  const click2 = (event) => {
    event.stopPropagation()
    alert("2")
  }
  const click3 = (event) => {
    alert("3")
  }
  const click4 = (event) => {
    alert("4")
  }
  return (
      <div>
        {props.data?.fetchBoardComments.map((el) => (
          <S.ItemWrapper onClick={click1}>
            <S.FlexWrapper onClick={click2}>
              <S.Avatar src="/images/avatar.png" onClick={click3} />
              <S.MainWrapper>
                <S.WriterWrapper onClick={click4}>
                  <S.Writer>{el.writer}</S.Writer>
                </S.WriterWrapper>
                <QQQ />
              </S.MainWrapper>
              <S.OptionWrapper>
                <S.UpdateIcon src="/images/boardComment/list/option_update_icon.png/" />
                <S.DeleteIcon
                  id={el._id}
                  src="/images/boardComment/list/option_delete_icon.png/"
                  onClick={props.onClickDelete}
                />
              </S.OptionWrapper>
            </S.FlexWrapper>
            <S.DateString>{getDate(el?.createdAt)}</S.DateString>
          </S.ItemWrapper>
        ))}
      </div>
  );
}
