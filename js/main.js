자바스크립트의 Scope 에 대한 이해

Scope 란, 우리가 변수 혹은 함수를 선언하게 될 때 해당 변수 또는 함수가 유효한 범위를 의미

Scope 는 총 3가지 종류가 있다.

Global (전역) Scope: 코드의 모든 범위에서 사용이 가능
Function (함수) Scope: 함수 안에서만 사용이 가눙
Block (블록) Scope: if, for, switch 등 특정 블록 내부에서만 사용이 가능

예시를 통한 Scope 이해

const value = 'hello!';

function myFunction() {
  console.log('myFunction: ');
  console.log(value);
}

function otherFunction() {
  console.log('otherFunction: ');
  const value = 'bye!';
  console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);

위 코드의 결과
//myFunction: hello!
//otherFunction: bye!
//global scope: hello!

또 다른 예시

const value = 'hello!';

function myFunction() {
  const value = 'bye!';
  const anotherValue = 'world';
  function functionInside() {
    console.log('functionInside: ');
    console.log(value);
    console.log(anotherValue);
  }
  functionInside();
}


myFunction()
console.log('global scope: ');
console.log(value);
console.log(anotherValue);

//function: bye!, world
//global scope: hello!
//Error in sandbox: another is not defined

myFunction 내부에 anotherValue 라는 새로운 값을 선언했고, functionInside 라는 함수도 선언을 했습니다. functionInside 함수에서는 myFunction 에서 선언한 value 값과 anotherValue 값을 조회 할 수 있습니다.

반면, myFunction 밖에서는 anotherValue 를 조회 할 수 없습니다.

이제, 또 다른 예시

const value = 'hello!';

function myFunction() {
  const value = 'bye!';
  if (true) {
    const value = 'world';
    console.log('block scope: ');
    console.log(value);
  }
  console.log('function scope: ');
  console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value);

위 코드의 결과
//block scope: world
//function scope: bye!
//global scope: hello!

const 로 선언한 값은 Block Scope 로 선언이 됩니다. 
따라서, if 문 같은 블록 내에서 새로운 변수/상수를 선언하게 된다면, 
해당 블록 내부에서만 사용이 가능하며, 
블록 밖의 범위에서 똑같은 이름을 가진 값이 있다고 해도 영향을 주지 않습니다.

let 또한 마찬가지


하지만 var 는 어떨까요?

var value = 'hello!';

function myFunction() {
  var value = 'bye!';
  if (true) {
    var value = 'world';
    console.log('block scope: ');
    console.log(value);
  }
  console.log('function scope: ');
  console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value);

var 는 Function Scope 로 선언이 되므로, 
if 문 블록 내부에서 선언한 value 값이 블록 밖의 value 에도 영향을 미치게 됩니다.

위 코드의 결과
//block scope: world
//function scope: world
//global scope: hello!