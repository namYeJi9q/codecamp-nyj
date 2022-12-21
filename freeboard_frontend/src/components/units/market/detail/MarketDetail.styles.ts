import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
`;

export const ContentBox = styled.div`
  border-radius: 50px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: left;
  border: none;
  box-shadow: 0px 0px 10px gray;
  margin-bottom: 80px;
`;

export const Header = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Title = styled.p`
  padding: 20px 0;
  text-align: left;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;
