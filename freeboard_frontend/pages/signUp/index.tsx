import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../src/commons/types/generated/types";
import { Modal } from "antd";
import styled from "@emotion/styled";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";

interface IFormData {
  name: string;
  password: string;
  email: string;
}

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

const SingUpSchema = yup.object({
  name: yup
    .string()
    .required("아이디를 입력해주세요")
    .max(15, "15글자 이내로 적어주세요"),
  email: yup.string().required("이메일을 입력하세요"),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .max(8, "최대 8자리까지 가능")
    .matches(
      /(?=.*\d{1,50})(?=.*[!@#$%&]{1,50})(?=.*[a-zA-Z]{1,50}).{1,8}/,
      "*대소문자, 숫자, 특수문자를 사용해주세요. *특수문자는 (!, @, #, $, %, &)만 사용"
    ),
});

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const LoginImgWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const LoginImg = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(50%);
`;

const InnerWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.form`
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
`;

export const LoginTitle = styled.h2`
  margin-bottom: 20px;
  white-space: pre-wrap;
  text-align: center;
  font-size: 30px;
  font-weight: 900;
  color: #fff;
`;

export default function SignUpPage() {
  const router = useRouter();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(SingUpSchema),
    mode: "onChange",
  });

  const onClickSignUp = async (data: IFormData) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        },
      });
      void router.push("/signIn");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const text = `WELCOME TO\n BOULD UP!`;

  return (
    <Wrapper>
      <LoginImgWrap>
        <LoginImg src="/images/login/loginPage.jpg" />
        <InnerWrapper>
          <InputWrapper onSubmit={handleSubmit(onClickSignUp)}>
            <LoginTitle>{text}</LoginTitle>
            <Input01
              type="text"
              placeholder="닉네임"
              register={register("name")}
            />
            <div style={{ color: "red" }}>{formState.errors.name?.message}</div>
            <Input01
              type="text"
              placeholder="이메일"
              register={register("email")}
            />
            <div style={{ color: "red" }}>
              {formState.errors.email?.message}
            </div>
            <Input01
              type="password"
              placeholder="비밀번호"
              register={register("password")}
            />
            <div style={{ color: "red" }}>
              {formState.errors.password?.message}
            </div>
            <Button01 title="회원가입" isActive={formState.isValid} />
          </InputWrapper>
        </InnerWrapper>
      </LoginImgWrap>
    </Wrapper>
  );
}
