import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const LoginImgWrap = styled.div`
  width: 100%;
  position: relative;
`;

export const LoginImg = styled.img`
  width: 100%;
  height: 100vh;
  filter: brightness(50%);
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.form`
  width: 350px;
  height: 400px;
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

export const InputWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;
