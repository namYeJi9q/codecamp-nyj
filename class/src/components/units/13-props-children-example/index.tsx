interface IProps {
  school: String;
  children: JSX.Element;
}

export default function Example(props: IProps) {
  return (
    <>
      <div>안녕하세요 영희입니다.</div> {/* 이거는 바뀌지 않음 */}
      <div>{props.school}</div> {/* 이거는 바뀔수 있음교체됨 */}
      <div>{props.children}</div> {/* 이거는 바뀔수 있음 */}
      <div>안녕하세요 맹구입니다.</div> {/* 이거는 바뀌지 않음 */}
    </>
  );
}
