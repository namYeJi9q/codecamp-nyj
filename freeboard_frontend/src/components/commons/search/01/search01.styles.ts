import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const SearchWrap = styled.span`
  position: relative;
  width: 500px;
  height: 45px;

  cursor: pointer;
  :hover {
    /* box-shadow: 5px 5px 2px 1px rgba(255, 199, 199, 0.2); */
    border-bottom: 1px solid #000;
  }
`;

export const SearchBox = styled.input`
  background-color: rgba(0, 0, 0, 0);

  border: none;
  width: 100%;
  height: 100%;
  padding: 0 0 0 36px;
  font-size: 15px;
  cursor: pointer;
`;

export const SearchIcon = styled(SearchOutlined)`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 1;
`;
