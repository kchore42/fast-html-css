복습과 퀴즈

for each 모든 것들을 출력하는 함수
map 원소를 다른 형태로 변환

const array = [1, 2, 3, 4, 5]
const square = n => N * N
indexOf 어디 있는지

findindex 조건에 만족한 위치 확인
find 객체 자체를 리턴
filter
splice 특정 항목 제거 
slice 기존 배열 건들지 않음
shfit 왼쪽 
Pop
unshift


concat 배열 2개 합침
join
reduce / accumulator


퀴즈
숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.

function biggerThanThree(numbers) {
  /* 구현해보세요 */
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
---------------------------------------------------------------
퀴즈
이제 지금까지 배운 것들을 활용하여 퀴즈를 풀어봅시다!

숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.

function countBiggerThanTen(numbers) {
  /* 구현해보세요 */
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5