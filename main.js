비구조화 할당 시 이름 바꾸기

비구조화 할당을 하는 과정에서 선언 할 값의 이름을 바꾸는 방법

예를 들어서 다음과 같은 코드가 있다고 가정

const animal = {
  name: '멍멍이',
  type: '개'
};

const nickname = animal.name;

console.log(nickname); // 멍멍이

위 코드에서는 animal.name 값을 nickname 값에 담고 있는데

이름이 같다면 그냥 우리가 이전에 배웠던 대로 비구조화 할당을 쓰면 되는데 지금은 이름이 서로 다르다.

이러한 상황에서는 : 문자를 사용해서 이름을 바꿔줄 수 있다.

const animal = {
  name: '멍멍이',
  type: '개'
};

const { name: nickname } = animal
console.log(nickname);

위 코드는 'animal 객체 안에 있는 name 을 nickname 이라고 선언하겠다.' 라는 의미

배열 비구조화 할당

비구조화 할당은 객체에만 할 수 있는 것이 아니라 배열에서 할 수 있다.

예시 코드

const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);

이 문법은 배열 안에 있는 원소를 다른 이름으로 새로 선언해주고 싶을 때 사용하면 매우 유용.

객체 비구조화 할당과 마찬가지로, 기본값 지정이 가능.

const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);