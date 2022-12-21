import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

/* eslint-disable react/display-name */
export const withAuth = (Component: any) => (props: any) => {
  // 로그인 체크
  const router = useRouter();
  const refreshToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void refreshToken.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다!!");
        void router.push("/signIn");
      }
    });
  }, []);
  return <Component {...props} />;
};
