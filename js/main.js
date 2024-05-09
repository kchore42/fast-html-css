삼향 연산자

condition ? ture : false

const array = [];
let next = array.length === 0 
? '배열이 비어있습니다.'
: '배열이 비어있지 않습니다.';

console/log(text)

const array = [];
let text = array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.';

console.log(text);
삼항 연산자의 사용법은 다음과 같습니다.

조건 
? true일때 
: false일때
라인의 길이가 너묵 길어진다면 다음과 같이 작성하기도 합니다.

const array = [];
let text = array.length === 0 
  ? '배열이 비어있습니다' 
  : '배열이 비어있지 않습니다.';

console.log(text);
다음과 같이 삼항 연산자를 중첩해서 쓸 수도 있는데요

const condition1 = false;
const condition2 = false;

const value = condition1 
  ? '와우!' 
  : condition2 
    ? 'blabla' 
    : 'foo';

console.log(value);