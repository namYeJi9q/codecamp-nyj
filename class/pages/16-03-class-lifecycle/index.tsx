import Router from "next/router";
import { Component } from "react";

// 만들어져 있는 Component기능을 상속해준다.
export default class ClassCounterPage extends Component {
  // state 만들 때 규칙 : 반드시 state라고 적어줘야함  / Component에 useState기능이 들어가있어 이렇게 적어줌
  state = {
    count: 0,
  };

  // 이미 내장되어있는 얘
  componentDidMount() {
    console.log("그려지고 나서 실행!!");
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행!!");
  }

  componentWillUnmount() {
    console.log("사라질 때 실행");
    // 예) 채팅방 나가기 API
  }

  onClickCountUp = () => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  onClickMove() {
    void Router.push("/");
  }

  // 클래스에는 리턴이라는게 없다. 대신 화면에 그림그려줘라는 render() 기능이 있다.
  // render도 덮어씌우는 거임
  render() {
    return (
      // 화면에 그릴 부분을 여기에 써줌// 이것말고 내장되어있는 함수가 몇개 있음
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!!</button>
        <button onClick={this.onClickMove}>나가기!!</button>
      </>
    );
  }
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
