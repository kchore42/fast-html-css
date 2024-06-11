map

map 은 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열이 만들어집니다.

예를 들어서 다음과 같은 배열이 있다고 가정해봅시다.

const array = [1, 2, 3, 4, 5, 6, 7, 8];

만약에 배열 안의 모든 숫자를 제곱해서 새로운 배열을 만들고 싶다면 어떻게 해야 할까요? 

map 함수를 사용하지 않고 우리가 지금까지 배운 지식들을 활용하면 다음과 같이 구현 할 수 있습니다.

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

console.log(squared);

또는 방금 배운 forEach 를 쓰면 다음과 같이 구현 할 수도 있겠죠

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];

array.forEach(n => {
  squared.push(n * n);
});

console.log(squared);
결과는 다음과 같습니다.

[1, 4, 9, 16, 25, 36, 49, 64];
만약 map 을 사용하면 이를 더 짧은 코드를 사용하여 구현 할 수 있습니다.

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;
const squared = array.map(square);
console.log(squared);
똑같은 결과가 나타났나요?

map 함수의 파라미터로는 변화를 주는 함수를 전달해줍니다. 이를 변화함수라고 부르도록 하겠습니다.

현재 우리의 변화함수 square 는 파라미터 n 을 받아와서 이를 제곱해줍니다.

array.map 함수를 사용 할 때 square 를 변화함수로 사용함으로서, 내부의 모든 값에 대하여 제곱을 해서 새로운 배열을 생성하였습니다.

변화 함수를 꼭 이름을 붙여서 선언 할 필요는 없습니다. 코드를 다음과 같이 작성해도 됩니다.

const squared = array.map(n => n * n);
console.log(squared);

for (초기 구문; 조건 구문; 변화 구문;) {
  코드
}

map 은 배열 안의 각 원소를 변환할 때 사용 되며, 이 과정에서 새로운 배열이 만들어 진다.

*map 함수 사용 x

const array =[1, 2, 3, 4, 5, 6, 7, 8];

모든 숫자를 제곱해서 새로운 배열을 만들어 보자

const squared = [];
for (let i = 0; i < array.length; i++) {
 squared.push(array[i] * array[i]);
}

console.log(sqared);

*방금 배운 forEach 를 쓰면

const array =[1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];

array.forEach(n => {
 squared.push(n*n);
});

결과
[1, 4, 9, 16, 25, 36, 49, 64];

*map 활용
const array =[1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;
const squared = array.map(square);
console.log(squared);

map 함수는 파라미터의 변화를 주는 함수를 전달해줍니다. 이를 변화함수라고 부른다.

변화함수는 꼭 이름을 붙여 선언할 필요가 없다.

const squared = array.map(n=>n * n);
console.log(squared);

