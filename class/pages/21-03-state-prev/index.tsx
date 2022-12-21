import { useState } from "react";

export default function CounterStatePage() {
  // let count = 10
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    // 1. 화살표함수
    setCount((prev) => prev + 1);

    // 2. 함수선언식
    setCount(function (prev) {
      // 로직추가 가능
      // if문이나 for문 등
      return prev + 1;
    });

    // 3. 매개변수 바꾸기
    setCount((ddsafdsf) => ddsafdsf + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </div>
  );
}
