import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 1. 프리렌더링 예제 - process.browser 방법
  // if (process.browser) {
  //   window.alert("안녕하세요!")
  //   console.log("지금은 브라우저!!!");
  //   const result = localStorage.getItem("accessToken")?? ""
  //   setAccessToken(result);
  // } else {
  //   console.log(
  //     "지금은 프론트엔드 서버!!!(즉 yarn dev로 실행시킨 프로그램 내부)"
  //   );
  // }
  // 2. 프리렌더링 예제 - typeof window 방법
  // 없으면 서버, 있으면 브라우저
  // if(typeof window === "undefined") {
  //   //브라우저
  // }else{
  //   //프론트엔드 서버
  // }
  // window.alert()
  // window.localStorage()

  // 3. 프리렌더링 무시 - useEffect 방법
  // 위치와 상관없이 가장 마지막에 실행됨. , 그리고 브라우저에서만 실행되서 프리렌더링이 안됨
  useEffect(() => {
    // // 브라우저 1. 기존방식
    // const result = localStorage.getItem("accessToken") ?? "";
    // setAccessToken(result);

    // 2. 새로운 방식(refreshToken 이후)
    void aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // 로그인 시 리프레시 토큰
  // 왜 graphQLErrors operation forward 가 들어오는가
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    // 에러가 동시에 여러개가 들어올 수 있다. graphQLErrors  apollo docs에 나와있나
    if (graphQLErrors !== undefined) {
      for (const err of graphQLErrors) {
        // 1-2 해당 에러가 토큰만료 에러인지 체크하기(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기 후 나주에 쓸 가능성이 높으므로 컴포넌트로 빼기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);

              // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리의 정보 수정하기
              // 실패한 인가 operation 안에 getContext (헤더나 기타 정보를 가지고 있음
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization:  Bearer asldkfjlasdk => 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 3-1 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-3 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });

  // 이미지 업로드 기능이 추가된
  const uploadLink = createUploadLink({
    uri: "https://backend10.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 모두 임시로 저장해 놓기 => 나중에 알아보기
  });

  // prettier-ignore 라고 치면 아래는 프리티어가 무시된다.
  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
