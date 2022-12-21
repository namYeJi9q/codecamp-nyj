import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";
// 전체에 하려면 app.js에 하고 이 페이지만 적용하려면 페이지 안에 적어준다.
import "antd/dist/antd.css";

const MyIcon = styled(Rate)``;

export default function LibraryIconPage() {
  const [value, setValue] = useState(3);

  return <MyIcon onChange={setValue} value={value} />;
}
