import styled from "@emotion/styled";
import { IPaginationStyleProps } from "./pagination.types";

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const PageArrow = styled.button`
  font-weight: 700;
  cursor: pointer;
  color: ${(props: IPaginationStyleProps) =>
    props.isActivePage ? "gray" : "pink"};
  border: ${(props: IPaginationStyleProps) =>
    props.isActivePage ? "2px solid gray" : "2px solid pink"};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: ${(props: IPaginationStyleProps) =>
    props.isActivePage ? "#eee" : "white"};
`;

export const ToggleActive = styled.span`
  color: ${(props: IPaginationStyleProps) =>
    props.isActivePage ? "pink" : "black"};
  margin: 15px;
  cursor: pointer;
`;
