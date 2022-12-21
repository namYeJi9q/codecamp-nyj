import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutBanner from "./banner/LayoutBanner..container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";

const LayoutBody = styled.div`
  width: 100%;
  height: auto;
`;

interface LayoutProps {
  children: JSX.Element;
}

// 헤더는 옆에서 나왔다 놨다 할 수 있게 하자.
const HIDDEN_HEADER = [""];
const HIDDEN_BANNER = [""];
const HIDDEN_FOOTER = ["/", "/myPage", "/signIn", "/signUp", "/market"];

export default function Layout(props: LayoutProps) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenBanner && <LayoutBanner />}
      <LayoutBody>{props.children}</LayoutBody>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
