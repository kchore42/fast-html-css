Hoisting 이해하기

Hoisting 이란, 
자바스크립트에서 아직 선언되지 않은 함수/변수를 "끌어올려서" 사용 할 수 있는 자바스크립트의 작동 방식을 의미

myFunction();

function myFunction() {
  console.log('hello world!');
}
위 코드에서는 myFunction 함수를 선언하기 전에, myFunction() 을 호출해주었습니다. 

함수가 아직 선언되지 않았음에도 불구하고 코드는 정상적으로 작동하게 됩니다.

이게 잘 작동하는 이유는, 자바스크립트 엔진이 위 코드를 해석하는 과정에서, 

다음과 같이 받아들이게 되기 때문입니다.

function myFunction() {
  console.log('hello world!');
}

myFunction();
이러한 현상을, Hoisting 이라고 부릅니다.

변수 또한 Hoisting 됩니다.

예시

console.log(number);
//오류 발생

console.log(number);
var number = 2;

//undefined

자바스크립트 엔진이 위 코드를 해석 할 때는 다음과 같이 받아들이게 됩니다.

var number;
console.log(number);
number = 2;

반면, const 와 let 은 hoisting 이 발생하지 않고, 에러가 발생하게 됩니다. 
Codesandbox 에서는 자바스크립트가 Babel 이라는 도구에 의하여 
const 와 let 이 var 로 변환되기 때문에 오류가 발생하지 않습니다. 

function fn() {
  console.log(a);
  let a = 2;
}
fn();

//오류 발생

Hoisting 은 자바스크립트 엔진이 갖고 있는 성질이며, 
Hoisting 을 일부러 할 필요는 없지만, 방지하는 것이 좋습니다. 
왜냐하면 Hoisting 이 발생하는 코드는 이해하기 어렵기 때문에 유지보수도 힘들어지고 
의도치 않는 결과물이 나타나기 쉽기 때문입니다.

Hoisting 을 방지하기 위해서, 함수의 경우 꼭 선언 후에 호출을 하도록 주의를 하시고, 
var 대신 const, let 을 위주로 사용하세요. 
추가적으로, 나중에 자바스크립트 개발을 본격적으로 하게 될 때에는 
ESLint 라는것을 사용하여 Hoisting 이 발생하는 코드는 에디터상에서 쉽게 발견

