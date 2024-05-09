reduce

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
  sum += n;
});
console.log(sum)

const numbers = [1, 2, 3, 4, 5];
let sum = array.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);

const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum);

accumulater는 누적 값
current 현재 값

reduce 를 사용해서 평균도 계산 할 수 있습니다. 평균을 계산하려면, 가장 마지막 숫자를 더하고 나서 배열의 length 로 나누어주어야 합니다.

const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);

console.log(sum);