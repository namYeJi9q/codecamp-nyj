import { useState } from "react";
import Word from "./02-child";
import { v4 as uuidv4 } from "uuid";

export default function MemoizationParentPage() {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다.");

  const onClickChange = () => {
    setData("영희는 오늘 저녁을 맛없게 먹었습니다.");
  };

  return (
    <>
      {/* 1. 메모시 key 또는 el이 변경된 부분만 리렌더링 됨 */}
      {/* {data.split(" ").map((el, index) => (
        <Word key={index} el={el} />
      ))} */}

      {/* 2. memo를 해도, key자체가 변경되어 props로 넘어가므로, 모두 리렌더링 됨 */}
      {data.split(" ").map((el, index) => (
        // 매번 새로운 아이디를 가져오기 때문에 계속 리렌더가 된다.
        <Word key={uuidv4()} el={el} />
      ))}
      <button onClick={onClickChange}>체인지</button>
    </>
  );
}
