import { memo } from "react";

function MemoizationChildPage() {
  console.log("자식컴포넌트가 렌더링 되었습니다.");
  return (
    <>
      <div>============================</div>
      <h1>저는 자식 컴포넌트 입니다!!</h1>
      <div>============================</div>
    </>
  );
}

// 이렇게 하면 부모가 바뀌어도 자식은 그래도있다.
export default memo(MemoizationChildPage);
