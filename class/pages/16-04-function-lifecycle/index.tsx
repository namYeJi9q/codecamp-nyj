import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClassCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // useEffect(() => {
  //   console.log("그려지고 나서 실행!!")
  // }, [])

  // // 의존성 배열을 빼면 뭐가 변경되더라도 실행됨. 변경되고 나서 실행도 되지만 그려지고 나서도 실행됨.
  // useEffect(() => {
  //   console.log("변경되고 나서 실행!!")
  // })

  // useEffect(() => {

  //   return () => {
  //     console.log("사라질때 실행!")
  //   }
  // })

  // useEffect 사용법 =1 ) 하나로 합치기 가능
  useEffect(() => {
    console.log("그려지고 나서 실행!!");
    return () => {
      console.log("사라질때 실행!");
    };
  }, [count]);

  // useEffect의 잘못된 사용법
  useEffect(() => {
    // 가급적 useEffect에서 setState는 피하자. 리렌터링이 되니까
    setCount((prev) => prev + 1);
  });

  const onClickCountUp = () => {
    console.log(count);
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  return (
    // 화면에 그릴 부분을 여기에 써줌// 이것말고 내장되어있는 함수가 몇개 있음
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      <button onClick={onClickMove}>나가기!!</button>
    </>
  );
}

// class Monster {
//   power = 50;

//   // 앞에 const, let 안붙임
//   attack() {
//     console.log("공격합니다.!");
//   }
// }

// class 슈퍼몬스터 extends Monster {
//   run() {
//     console.log("도망가자!");
//   }

//   // 오버라이딩, 덮어씌워짐
//   attack() {

//   }
// }

// const myMonster = new Monster();

// myMonster.attack();
// myMonster.power;

// const 나의슈퍼몬스터 = new 슈퍼몬스터();
// 나의슈퍼몬스터.attack();
// 나의슈퍼몬스터.run();
