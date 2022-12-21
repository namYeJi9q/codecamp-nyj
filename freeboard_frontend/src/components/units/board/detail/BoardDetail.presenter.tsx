import { EnvironmentFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import Button02 from "../../../commons/buttons/02";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <div>
      <S.Wrapper>
        <S.InnerWapper>
          <S.CardWrapper>
            <S.Header>
              <S.AvatarWrapper>
                <S.Avatar src="/images/avatar.png" />
                <S.Info>
                  <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                  <S.CreatedAt>
                    {getDate(props.data?.fetchBoard?.createdAt)}
                  </S.CreatedAt>
                </S.Info>
              </S.AvatarWrapper>
              <S.IconWrapper>
                <Tooltip
                  placement="topRight"
                  title={`${
                    props.data?.fetchBoard.boardAddress?.address ?? ""
                  } ${
                    props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                  }`}
                >
                  <EnvironmentFilled />
                </Tooltip>
              </S.IconWrapper>
            </S.Header>
            <S.Body>
              <S.Title>{props.data?.fetchBoard?.title}</S.Title>
              <S.ImageWrapper>
                {props.data?.fetchBoard.images
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <S.Image
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
              </S.ImageWrapper>
              <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
              {props.data?.fetchBoard.youtubeUrl && (
                <S.Youtube
                  url={props.data?.fetchBoard.youtubeUrl}
                  width="486px"
                  height="240px"
                />
              )}
              <S.LikeWrapper>
                <S.IconWrapper>
                  <S.LikeIcon onClick={props.onClickLike} />
                  <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
                </S.IconWrapper>
                <S.IconWrapper>
                  <S.DislikeIcon onClick={props.onClickDislike} />
                  <S.DislikeCount>
                    {props.data?.fetchBoard.dislikeCount}
                  </S.DislikeCount>
                </S.IconWrapper>
              </S.LikeWrapper>
            </S.Body>
          </S.CardWrapper>
          <S.BottomWrapper>
            <Button02
              title="목록으로"
              onClick={props.onClickMoveToBoardList}
            ></Button02>
            <Button02
              title="수정하기"
              onClick={props.onClickMoveToBoardEdit}
            ></Button02>
            <Button02 title="수정하기" onClick={props.onClickDelete}></Button02>
          </S.BottomWrapper>
        </S.InnerWapper>
      </S.Wrapper>
    </div>
  );
}
