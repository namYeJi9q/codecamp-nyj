import ChildPage from "./02-child";

export default function ParentPage() {
  //   return <ChildPage const={15} />;
  return <>{ChildPage({ count: 123 })}</>;
}

// 매개변수는 함수나 객체로 주어도 잘 나온다...
