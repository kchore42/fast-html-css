06. 비구조화 할당 (구조분해) 문법

전에 배웠던 비구조화 할당 문법을 잘 활용하는 방법

이전에 배웠던것을 복습해보자면, 
비구조화 할당 문법을 사용하면 다음과 같이 객체 안에 있는 값을 추출해서 변수 혹은 상수로 바로 선언해 줄 수 있었다.

const object = { a: 1, b: 2 };

const { a, b } = object;

console.log(a); // 1
console.log(b); // 2

그리고, 함수의 파라미터에서도 비구조화 할당을 할 수 있는것도 배웠다.

const object = { a: 1, b: 2 };

function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object);

그런데 여기서 만약 b 값이 주어지지 않았다고 가정한다면

const object = { a: 1 };

function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object);
// 1
// undefined

두번째 출력에서 undefined가 나타남.

비구조화 할당 시 기본값 설정

이러한 상황에 b 값에 기본 값을 주고 싶다면 이렇게 해줄 수 있다.

const object = { a: 1 };

function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

print(object);
// 1
// 2
이는 꼭 함수의 파라미터에서만 할 수 있는 것은 아니다.

const object = { a: 1 };

const { a, b = 2 } = object;

console.log(a); // 1
console.log(b); // 2