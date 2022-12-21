// import { useRouter } from "next/router";
// import { useEffect } from "react";

// export const withAuth = (ABC: any) => (props: any) => {
//   const router = useRouter();

//   // // 로그인 체크(refreshtoken 이전)
//   // useEffect(() => {
//   //   if (localStorage.getItem("accessToken") === null) {
//   //     alert("로그인 후 이용 가능합니다!!!");
//   //     void router.push("/23-03-login-check");
//   //   }
//   // }, []);

//   // 2. 로그인 체크(refreshtoken 이후)

//   useEffect(() => {
//  이건 _app.tsx에 이어서 총 2번 요청하게 됨 > 안좋음.
// void getAccessToken().then(newAccessToken => {
//     //   if(newAccessToken === undefined){
//     //     alert("로그인 후 이용 가능합니다!!!");
//     //     void router.push("/30-02-login-refreshtoken-success");
//     //   }
//     // })

//  함수를 공유하므로 _app.tsx에 이어서 총 1번만 요청하게됨 > 좋음
//     void aaa.toPromise().then((newAccessToken) => {
//       if (newAccessToken === undefined) {
//         void router.push("/30-02-login-refreshtoken-success");
//       }
//     });
//   }, []);
//   return <ABC {...props} />;
// };

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

export const withAuth = (ABC: any) => (props: any) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다!!!");
        void router.push("/30-02-login-refreshtoken-success");
      }
    });
  }, []);
  return <ABC {...props} />;
};
