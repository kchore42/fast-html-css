08. 반복문

반복문은 특정 작업을 반복적으로 할 때 사용할 수 있는 구문입니다.

for
for 문은 가장 기본적인 반복문입니다. 특정 값에 변화를 주어가면서 우리가 정한 조건이 만족된다면 계속 반복합니다.

한번 다음 코드를 따라 적어보세요.

for (let i = 0; i < 10; i++) {
  console.log(i);
}


결과가 0부터 9까지 잘 나타났나요?

for 문을 다음과 같이 사용합니다.

for (초기 구문; 조건 구문; 변화 구문;) {
  코드
}
for 문을 사용 할 때 보통 i++ 를 해서 1씩 증감하는 형태로 사용합니다. 그런데, 1씩 빼는 형태도 가능합니다. 
다음 코드를 한번 실행해보세요.

for (let i = 10; i > 0; i--) {
  console.log(i);
}


10부터 1까지 결과가 잘 나타났나요?

for 문은 이렇게 숫자에 변화를 주어가면서 반복적으로 작업을 실행합니다.
==================================================
배열과 for

이번에는 우리가 이전에 배운 배열과 for 문을 함꼐 활용해보겠습니다. 다음 코드를 작성해보세요.

const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
이렇게 하면 names 배열 안에있는 원소들을 하나하나 나열 할 수 있습니다.

반복문

반복문은 특정 작업을 반복적으로 할 때 사용할 수 있는 구문

for

for문은 가장 기본적인 반복분

for (let i = 0; i < 10; i++) {
 console.log(i);
}

for(초기 구문; 조건 구문; 변화 구문;) {
 코드
}

for 문을 사용할 때 보통 i++를 해서 1씩 증감하는 형태로 사용

for(let i = 10; i > 0; i--) {
 console.log(i);
}

===========
배열과 for

const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
 console.log(names[i]);
}
