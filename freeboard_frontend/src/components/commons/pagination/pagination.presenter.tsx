import * as S from "./pagination.styles";
import { IPaginationUIProps } from "./pagination.types";

export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <S.Wrapper>
      <S.PageArrow
        onClick={props.onClickPrevPage}
        disabled={props.startPage === 1}
        isActivePage={props.startPage === 1 ? true : false}
      >
        {"<"}
      </S.PageArrow>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.ToggleActive
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActivePage={props.isActivePage === props.startPage + index}
            >
              {props.startPage + index}
            </S.ToggleActive>
          )
      )}
      <S.PageArrow
        onClick={props.onClickNextPage}
        disabled={props.startPage + 10 > props.lastPage}
        isActivePage={props.startPage + 10 > props.lastPage ? true : false}
      >
        {">"}
      </S.PageArrow>
    </S.Wrapper>
  );
}
