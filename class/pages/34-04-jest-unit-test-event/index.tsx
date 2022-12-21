import { useState } from "react";

export default function JestUnitTest() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div role="count">철수는 {count}살 입니다.</div>
      <button role="count-button" onClick={onClickCountUp}>
        카운트 올리기
      </button>
    </>
  );
}
