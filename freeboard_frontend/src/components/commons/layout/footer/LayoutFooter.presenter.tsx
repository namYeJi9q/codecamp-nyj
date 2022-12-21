import styled from "@emotion/styled";

const FooterWrap = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
`;

const FooterSpan = styled.div`
  width: 1200px;
  margin: 0 auto;
  font-size: 12px;
  text-align: center;
  line-height: 100px;
  color: #fff;
`;

export default function LayoutFooterUI() {
  return (
    <FooterWrap>
      <FooterSpan>© 2022 SmartBear Software. All Rights Reserved.</FooterSpan>
    </FooterWrap>
  );
}
