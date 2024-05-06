템플릿 리터럴을 사용하여 구현을 해봅시다.

function hello(name) {
  console.log(`Hello, ${name}!`);
}
hello('velopert');

function hello(name) {
    return(`Hello, ${name}!`);
  }
  
  const result = hello('velopert');
  console.log(result)