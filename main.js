숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.

=======================================
// forEach
function countBiggerThenTen(numbers){
let cnt = 0
numbers.forEach(n => {
cnt += n>10 ? 1 : 0
})
return cnt
}

const count = countBiggerThenTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
console.log(count)

// 출력 :
5
============================
// for
function countBiggerThenTen(numbers){
let cnt = 0
for(let i=0;i<numbers.length;i++) {
cnt += numbers[i]>10 ? 1 : 0
}
return cnt
}

const count = countBiggerThenTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
console.log(count)
// 출력 :
5
==================================
// map
function countBiggerThenTen(numbers){
let cnt = 0;
numbers.map((n) => {
cnt += n > 10 ? 1 : 0
})
return cnt
}

const count = countBiggerThenTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
console.log(count)
// 출력 :
5
================================
// filter
function countBiggerThenTen(numbers){
let cnt = 0;
numbers.filter((n) => {
cnt += n > 10 ? 1 : 0
})
return cnt
}

const count = countBiggerThenTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
console.log(count)
// 출력 :
5
================================
// reduce
function countBiggerThenTen(numbers){
let cnt = numbers.reduce((res, cval, idx, arr) => {
return res += cval > 10 ? 1 : 0
}, 0)
return cnt
}

const count = countBiggerThenTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
console.log(count)
// 출력 :
5
===============================
// sol 1
const countBiggerThanTen = (numbers) => {
  const largerThen10 = numbers.filter((nums) => nums > 10);
  return largerThen10.length;
};

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
=================================================
// sol 2

const countBiggerThanTen = (numbers) => {
  const index = numbers.indexOf(10);
  const largerThen10 = numbers.splice(index, numbers.length - index);
  largerThen10.shift();
  return largerThen10.length;
};

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
=========================================
function countBiggerThanTen(numbers) {
let num = numbers.reduce((accumulate, current) => {
if(current > 10)
return ++accumulate;
else
return accumulate;
}, 0);

return num;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

export default countBiggerThanTen;