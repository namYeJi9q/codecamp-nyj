// 1. HOF - 일반함수
function first<T>(arg1: T) {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result = first("영희")(8);

// 2. HOF - 화살표함수
// prettier-ignore
const first2 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
};

const result = first2("영희")(8);

// 2. HOF - 화살표함수
// prettier-ignore
const withAuth = <C>(Component: C) => <P>(props: P): [C, P] => {
    return [Component, props];
};

const result = first2("영희")(8);
