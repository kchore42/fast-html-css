05. 함수
함수는, 특정 코드를 하나의 명령으로 실행 할 수 있게 해주는 기능

const a = 1;
const b = 2;
const sum = a + b;

여러 개의 파라미터 가져올 때 쉼표
결과 값은 return

function add(a, b) {
    return a + b;
  }
  
  const sum = add(1, 2);
  console.log(sum);
  결과는 3이 됩니다.

  함수를 만들 때는 function 키워드를 사용하며, 함수에서 어떤 값을 받아올지 정해주는데 이를 파라미터(매개변수)라고 부릅니다.

함수 내부에서 return 키워드를 사용하여 함수의 결과물을 지정 할 수 있습니다.

추가적으로, return 을 하게 되면 함수가 끝납니다. 

만약 다음과 같이 코드가 작성된다면, return 아래의 코드는 호출이 안됩니다.

function add(a, b) {
  return a + b;
  console.log('호출이 되지 않는 코드!');
}

const sum = add(1, 2);
console.log(sum);

Hello, name!
name 이라는 파라미터를 넣으면 콘솔에 'Hello name!' 이라는 결과를 출력하는 코드를 작성해봅시다.

function hello(name) {
  console.log('Hello, ' + name + '!');
}
hello('velopert');
결과물은 다음과 같습니다.

"Hello, velopert!"
