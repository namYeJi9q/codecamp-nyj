import { useState } from "react";

export default function CounterStatePage() {
  // let count = 10
  const result = useState(0);

  function onClickCountUp() {
    // count = count + 1 // let은 리액트 html에서 변경을 감지하지 못함
    result[1](result[0] + 1); // state는 리액트 html에서 변경을 감지함(즉, document.get... 필요없음)
  }

  function onClickCountDown() {
    result[1](result[0] - 1);
  }

  return (
    <div>
      <div>{result[0]}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
      <button onClick={onClickCountDown}>카운트 내리기!!!</button>
    </div>
  );
}
