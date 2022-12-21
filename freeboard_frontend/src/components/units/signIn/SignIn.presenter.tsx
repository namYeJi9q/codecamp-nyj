import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import Button01 from "../../commons/buttons/01";
import Input01 from "../../commons/inputs/01";
import { LOGIN_USER } from "./SignIn.queries";
import * as S from "./SignIn.styles";
import { LoginSchema } from "./SignIn.validation";

interface IFormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const router = useRouter();

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(LoginSchema),
    mode: "onChange",
  });

  const onclickLogin = async (data: IFormData) => {
    try {
      // 1. 로그인 뮤테이션을 날려서 access토큰 받아오기
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);
      // 2. 받아온 accessToken을 globalState에 저장하기
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다." });
        void router.push("/signIn");
        return;
      }
      setAccessToken(accessToken);
      void router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const text = `WELCOME TO\n BOULD UP!`;

  return (
    <S.Wrapper>
      <S.LoginImgWrap>
        <S.LoginImg src="/images/login/loginPage.jpg" />
        <S.InnerWrapper>
          <S.InputWrapper onSubmit={handleSubmit(onclickLogin)}>
            <S.LoginTitle>{text}</S.LoginTitle>
            <S.InputWrap>
              {" "}
              <Input01
                type="text"
                placeholder="이메일을 입력학세요"
                register={register("email")}
              />
            </S.InputWrap>
            <S.InputWrap>
              <Input01
                type="password"
                register={register("password")}
                placeholder="비밀번호를 입력학세요"
              />
            </S.InputWrap>
            <Button01 title="로그인" isActive={formState.isValid} />
          </S.InputWrapper>
        </S.InnerWrapper>
      </S.LoginImgWrap>
    </S.Wrapper>
  );
}
