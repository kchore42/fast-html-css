두 값이 일치하는지 확인
const a = 1;
const b = 1;
const equals = a === b;
console.log(equals);

=== 는 두 값이 일치하는지 확인
==  타입 검사까지는 하지 않는다는 것

const a = 1;
const b = '1';
const equals = a == b;
console.log(equals);
결과: true

const a = 0;
const b = false;
const equals = a == b;
console.log(equals);
결과: true

const a = null;
const b = undefined;
const equals = a == b;
console.log(equals);
결과: true

== 대신 === 를 사용 할 것을 권장

두 값이 일치하지 않는지 확인 할 때에는 !==

const value = 'a' !== 'b';
결과물은 true 

!= 를 사용하게 되면 타입 검사를 하지 않음.

console.log(1 != '1');
console.log(1 !== '1');

처음엔 false, 두번째에서는 true

두 값이 일치하지 않는지 확인 할 때에도, !== 를 사용 할 것을 권장

*크고 작음

const a = 10;
const b = 15;
const c = 15;

console.log(a < b); // true
console.log(b > a); // true
console.log(b >= c); // true
console.log(a <= c); // true
console.log(b < c); // false;

/*
  여러줄로 주석 작성하기
*/

//문자열 붙이기
const a = '안녕';
const b = '하세요';
console.log(a + b); // 안녕하세요
