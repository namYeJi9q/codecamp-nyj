import { ShoppingOutlined } from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../../commons/stores";
import * as S from "./LayoutHeader.styles";

export default function LayoutHeader() {
  const [Open, setOpen] = useRecoilState(isOpenState);

  const onClickOpenMenu = () => {
    setOpen(true);
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Menu onClick={onClickOpenMenu} isOpen={Open} />
        <S.Img src="/images/logo2.png" />
        <ShoppingOutlined style={{ color: "#fff", fontSize: "20px" }} />
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
