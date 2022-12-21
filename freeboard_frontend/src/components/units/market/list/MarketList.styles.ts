import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
`;

export const SearchWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FlexWrap = styled.div`
  width: 100%;
  display: flex;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const ColumnBasic = styled.div`
  width: 100%;
  text-align: left;
`;

export const ColumnTitle = styled.div`
  width: 100%;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const BestitemWrap = styled.div`
  width: 100%;
  height: 550px;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BestTitle = styled.h2`
  text-align: center;
  font-size: 40px;
`;
export const Bestitems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Item = styled.div`
  border: 1px solid red;
  width: 350px;
  height: 100%;
`;

export const Best1 = styled(Item)``;
export const Best2 = styled(Item)``;
export const Best3 = styled(Item)``;

export const BestImage = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 350px;
  border-radius: 10%;
  box-shadow: 0px 0px 10px lightgray;
  overflow: hidden;
  background-image: url("/images/default.jpeg");
  background-size: cover;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin: 20px 0;
`;

export const ProductThumbnail = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 10%;

  overflow: hidden;
  margin-right: 20px;
  background-image: url("/images/default.jpeg");
  background-size: cover;
  box-shadow: 0px 0px 10px lightgray;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ProductInfo = styled.section`
  width: 100%;
  padding: 10px;
`;

export const Price = styled(ColumnBasic)`
  font-weight: 700;
  font-size: 24px;
`;

export const Button = styled.button`
  width: 160px;
  height: 42px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;
