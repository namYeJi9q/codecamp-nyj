import Example from "../../src/components/units/13-props-children-example";

export default function PropsChildrenPage() {
  return (
    <Example school="다람쥐초등학교">
      <>
        <input type="text" /> {/* 이거는 바뀜 */}
        <button>클릭해주세요!</button> {/* 이거는 바뀜 */}
      </>
    </Example>
  );
}
