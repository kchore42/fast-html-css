알고 있으면 유용한 JS 문법

01. 삼항 연산자

const array = [];
let text ='';
if array.length === 0) {
 text = '배열이 비어있습니다.';
} else {
 text = '배열이 비어있지 않습니다.';
}
console.log(text);

const array = [];
let text = array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.';

console.log(text);
삼항 연산자의 사용법은 다음과 같다.

조건 ? true일 때 : false일 때
라인의 길이가 너무 길어진다면 다음 과 같이 작성

const array = [];
let text = array.length === 0
 ? '배열이 비어있습니다.';
 : '배열이 비어있지 않습니다.';

console.log(text);

삼함 연산자를 주첩해서 쓸 수 있다.

const condition1 = false;
const condition2 = false;

const value = condition1
 ?'와우!'
 :condition2
 ?'blabla'
 :'foo';

console.log(value);

가독성이 그렇게 좋지 않으니 이러한 코드는 피하시는 것이 좋습니다. 이런 상황에는 차라리 if문으로 처리하는게 오히려 코드를 읽기가 쉬워질 수도 있습니다.


