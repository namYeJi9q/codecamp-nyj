import { useMutation, useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "./MyPage.queries";
import * as S from "./MyPage.styles";
import PaymentPage from "./myPoint/myPointPayment";

export default function MyPage() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Title>MY PAGE</S.Title>
        <p>환영합니다!</p>
        <div>
          <span>이름 :{data?.fetchUserLoggedIn.name}</span>
        </div>
        <div>
          <span>이메일 : {data?.fetchUserLoggedIn.email}</span>
        </div>
        <div>
          <span>내 포인트 : {data?.fetchUserLoggedIn.userPoint?.amount}</span>
        </div>
        <PaymentPage />
      </S.InnerWrapper>
    </S.Wrapper>
    // <myMarket />
    // <myPoint />
    // <myProfile />
  );
}
