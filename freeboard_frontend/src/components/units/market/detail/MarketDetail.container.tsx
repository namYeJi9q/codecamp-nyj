import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { getDate } from "../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IMutationUpdateUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import Button02 from "../../../commons/buttons/02";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
} from "../../../commons/hooks/queries/useQueryFetchUseditem";

import * as S from "./MarketDetail.styles";

export default function MarketDetail() {
  const router = useRouter();

  const { onClickMoveToPage } = useMoveToPage();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  console.log(data);
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const onClickDelete = async () => {
    await deleteUseditem({
      variables: { useditemId: String(router.query.useditemId) },
    });
    alert("게시글을 삭제되었습니다.");
    void router.push("/market");
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.ContentBox>
          <S.Header>
            <S.AvatarWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.Info>
                <S.Writer>{data?.fetchUseditem?.seller?.name}</S.Writer>
                <S.CreatedAt></S.CreatedAt>
              </S.Info>
            </S.AvatarWrapper>
          </S.Header>
          <S.Title>{data?.fetchUseditem?.name}</S.Title>
          <S.ImageWrapper>
            {data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImageWrapper>
        </S.ContentBox>
        <S.ButtonWrap>
          <Button02
            onClick={onClickMoveToPage("/market")}
            title={"목록보기"}
          ></Button02>
          {/* <Button02
            onClick={onClickMoveToPage(
              `/market/${router.query.useditemId}/edit}`
            )}
            title={"수정하기"}
            style={{ margin: "0 15px" }}
          ></Button02>
          <Button02 onClick={onClickDelete} title={"삭제하기"}></Button02> */}
          <Button02 title={"구매하기"}></Button02>
        </S.ButtonWrap>
        <div>댓글</div>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
