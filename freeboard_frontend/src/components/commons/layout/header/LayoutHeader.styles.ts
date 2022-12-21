import { MenuUnfoldOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import Link from "next/link";

interface ILayoutHeaderProps {
  isOpen: boolean;
}

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 11;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Menu = styled(MenuUnfoldOutlined)`
  font-size: 20px;
  color: ${(props: ILayoutHeaderProps) =>
    props.isOpen ? "rgba(0,0,0,0)" : "#fff"};
  text-shadow: -5px 5px #000;
`;

export const Liked = styled(Link)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Logo = styled.img`
  height: 100%;
`;
