import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const SearchWrap = styled.div`
  position: relative;
  width: 15%;
`;

export const SearchBox = styled.input`
  border: none;
  width: 100%;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 255, 0.2);
  height: 30px;
  border-radius: 15px;
  padding: 0 0 0 32px;
  font-size: 15px;
`;

export const SearchIcon = styled(SearchOutlined)`
  position: absolute;
  top: 7px;
  left: 12px;
  z-index: 1;
`;
