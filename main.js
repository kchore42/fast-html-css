break 와 continue

반복문 안에선 break와 continue를 통하여 반복분에서 벗어나거나, 그 다음 루프를 돌게끔 할 수 있다.

for (let i = 0; i < 10; I++) {
 if(i===2) continue; // 다음 루프를 실행
 console.log(i);
 if (i===5) break; // 반복문을 끝내기
}
i가 2일 땐 continue를 하여 언래 console를 해야 하지만 그 코드를 수행하지 않고 바로 3으로 넘어갑니다.

i가 5일 땐 break를 하여 반복문을 종료시킵니다.

function sum Of(numbers) {
 let sum = 0;
 for (let i = 0; i < numbers.length; i++) { 
  sum +=numbers[i];
  }
 return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
==================================
퀴즈
숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.

function biggerThanThree(numbers) {
  /* 구현해보세요 */
}
======================================
①
function biggerThanThree(numbers) {
const a =[];
for (let = i 0; i , numbers.length; i++) {
if( i < 3 ) continue;
a.push(number[i]);
}
return a;

② 
function biggerThanThree(numbers) {
numbers = numbers.filter((number) => number >3);
return number;
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers2)); // [4, 5, 6, 7]

③
function biggerThanThree(numbers) {
k = []
for (let number of number) {
if(number >3) {
k.push(number)
}
}

return k
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers2)); // [4, 5, 6, 7]