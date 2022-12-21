import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentWriteProps {
  el: IBoardComment;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isEdit?: boolean;
}

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => void;
  onClickUpdate: () => void;
  writer: string;
  password: string;
  contents: string;
  // 이거 데이터 타입 뭐임????
  setStar: Dispatch<SetStateAction<number>>;
  data?: any;
  isEdit?: boolean;
  el?: IBoardComment;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
