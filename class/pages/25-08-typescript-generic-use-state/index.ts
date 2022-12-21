import { useState } from "react";

// 제공자
export function useMyState<S>(qqq: S): [S, (value) => void] {
  const myState = qqq;

  const mySetState = (value) => {
    console.log(`${myState}에서 ${value}로 state를 변경하겠습니다!!!`);
    console.log(`변경된 ${value}를 사용해서 컴포넌트를 리렌더링 하겠습니다!!!`);
  };

  return [myState, mySetState];
}

// 사용자
const [count, setCount] = useMyState<number>(10);
