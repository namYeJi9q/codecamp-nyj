import { MenuUnfoldOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

interface ILayoutHeaderProps {
  isOpen: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
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
`;

export const Menu = styled(MenuUnfoldOutlined)`
  color: #fff;
  font-size: 20px;
  color: ${(props: ILayoutHeaderProps) =>
    props.isOpen ? "rgba(0,0,0,0)" : "#fff"};
`;

export const Img = styled.img`
  height: 100%;
`;
