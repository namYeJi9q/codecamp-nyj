import { css } from "@emotion/react";
import { url } from "inspector";

export const globalStyles = css`
  *,
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 15px;
    font-family: "myfont";
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
  }
`;
