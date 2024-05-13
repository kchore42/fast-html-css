함수 인자와 spread

const myFunction(a) { // 여기서 a 는 파라미터
  console.log(a); // 여기서 a 는 인자
}

myFunction('hello world'); // 여기서 'hello world' 는 인자
함수에서 값을 읽을때, 그 값들은 파라미터라고 부릅니다. 그리고 함수에서 값을 넣어줄 때, 그 값들은 인자라고 부릅니다.

우리가 방금 함수파라미터와 rest 를 사용한 것과 비슷한데, 반대의 역할입니다. 

예를 들어서, 우리가 배열 안에 있는 원소들을 모두 파라미터로 넣어주고 싶다고 가정해보겠습니다.

function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(
  numbers[0],
  numbers[1],
  numbers[2],
  numbers[3],
  numbers[4],
  numbers[5]
);
console.log(result);

sum함수를 사용 할 때 인자 부분에서 spread 를 사용하면 다음과 같이 표현이 가능

function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(...numbers);
console.log(result);
sd