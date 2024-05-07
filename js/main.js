for
for 문은 가장 기본적인 반복문

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (초기 구문; 조건 구문; 변화 구문;) {
  코드
}

for 문을 사용 할 때 보통 i++ 를 해서 1씩 증감하는 형태로 사용합니다. 그런데, 1씩 빼는 형태도 가능

for (let i = 10; i > 0; i--) {
  console.log(i);
}

배열과 for
이번에는 우리가 이전에 배운 배열과 for 문을 함꼐 활용

const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}