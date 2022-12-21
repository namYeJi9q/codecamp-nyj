// HOF
// 1. 함수를 리턴하는 함수 - HOF
// function aaa() {
//   const apple = 10;

//   return function bbb() {
//     const banana = 20;

//     console.log(banana);
//     console.log(apple);
//   };
// }

// aaa();

//
//
// 2. 함수를 리턴하는 함수 - 인자가 있는 경우
// function aaa(apple) {
//     return function bbb(banana) {

//       console.log(banana);
//       console.log(apple);
//     };
//   }

//   aaa(10)(20)

// function qqq() {}
// const qqq = () => {};

// 3. 화살표함수
// // bbb라는 이름 자체가 필요가 없다..!
// const aaa = (apple) => (banana) => {
//   console.log(banana);
//   console.log(apple);
// };

// aaa(10)(20);

// 4. 인자 3개
const aaa = (apple) => (banana) => (tomato) => {
  console.log(banana);
  console.log(apple);
  console.log(tomato);
};

aaa(10)(20)(30);
