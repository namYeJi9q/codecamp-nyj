import { css } from "@emotion/react";
export const globalStyles = css`
  *,
  html,
  body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "myfont2";
    letter-spacing: 1;
  }

  body {
    background-color: #fff;
  }

  @font-face {
    font-family: "myfont1";
    src: url("/fonts/DalseoHealingMedium.ttf");
  }

  @font-face {
    font-family: "myfont2";
    src: url("/fonts/Noto_Sans_KR");
  }
`;
