import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

// prettier-ignore
export const withAuth = (ABC: ComponentType) => <P extends {}>(props: P) => {
  const router = useRouter();

  // 로그인 체크
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다!!!");
      void router.push("/23-03-login-check");
    }
  }, []);

  return <ABC {...props} />;
};
