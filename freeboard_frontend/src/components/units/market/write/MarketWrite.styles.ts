import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  margin: 100px auto;
  border: 1px solid black;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
`;

export const MapWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgWrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const InputImg = styled.input`
  width: 80px;
  height: 80px;
  display: none;
`;

export const ShowImg = styled.img`
  width: 80px;
  height: 80px;
  background-color: #ddd;

  object-fit: cover;
  object-position: center;
  overflow: hidden;
  margin-right: 20px;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;
