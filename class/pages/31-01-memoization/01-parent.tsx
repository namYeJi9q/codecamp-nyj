import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./02-child";

export default function MemoizationParentPage() {
  console.log("부모컴포넌트가 렌더링 되었습니다.");
  let countLet = useMemo(() => 0, []);
  const [countState, setCountState] = useState(0);

  //   useMemo(() => {

  // }, [의존성배열이 바뀔때에만 렌더링된다.])

  // 1. useMemo로 변수기억
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  // 2. useCallback으로 함수 기억
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // 3. useCallback 사용시 주의사항 => state 사용 시 주의
  const onClickCountState = useCallback(() => {
    setCountState((prev) => prev + 1);
    console.log(countState);
  }, [countState]);

  // 4. useMemo로 나만의 useCallback 만들어보기 (실제로 이렇게 쓰지는 않음)
  //   const onClickCountState2 = useMemo(() => () => {
  //       console.log(countState + 1);
  //       setCountState((prev) => prev + 1);
  //   }, []);

  return (
    <>
      <div>============================</div>
      <h1>저는 부모 컴포넌트 입니다!!!</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      {/* 이렇게 할 수도 있지만 로직과 UI가 합쳐져서 헷갈림 => 유지보수가 어렵다, 메모이제이션 더 복잡 */}
      {/* <button onClick={useCallback(() => {
        alert("클릭하셨습니다.")
        console.log(countState + 1);
        setCountState((prev) => prev + 1);
      }, [])}></button> */}

      <div>카운트(state)</div>
      <button onClick={onClickCountState}>
        카운트(state): {countState} +1 올리기
      </button>
      <div>============================</div>
      <MemoizationChildPage qqq={countState} />
    </>
  );
}
