import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { isOpenState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";

import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import * as S from "./LayoutBanner.styles";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function SimpleSlider() {
  const [Open, setOpen] = useRecoilState(isOpenState);
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const onClickExit = () => {
    setOpen(false);
  };

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const userName = data?.fetchUserLoggedIn.name;

  return (
    <S.HeaderWrapper>
      <S.HeaderInnerWrapper>
        <S.Exit></S.Exit>
        <S.HomeMenu>
          <Link href="/">
            <S.Logo src="/images/logo2.png" />
          </Link>
        </S.HomeMenu>
        <S.Sign>
          <S.Login
            onClick={
              userName === undefined
                ? onClickMoveToPage("/signIn")
                : onClickMoveToPage("/myPage")
            }
          >
            {userName ? userName : "로그인"}
          </S.Login>
          <S.SignUp
            onClick={
              userName
                ? onClickMoveToPage("/myPage")
                : onClickMoveToPage("/signUp")
            }
          >
            {userName ? "마이페이지" : "회원가입"}
          </S.SignUp>
        </S.Sign>
        <S.Menu>
          <S.ListUl>
            <S.ListLi onClick={onClickMoveToPage("/boards")}>게시판</S.ListLi>
            <S.ListLi onClick={onClickMoveToPage("/market")}>마켓</S.ListLi>
          </S.ListUl>
        </S.Menu>
      </S.HeaderInnerWrapper>
    </S.HeaderWrapper>
  );
}
