알고 있으면 유용한 JS 문법

02. Truthy and Falsy

이것은 자바스크립트 문법까지는 아니지만, 알아둬야 하는 개념입니다.

Truthy: true 같은 거
Falst: false 같은 거

라고 이해하면 된다.

function print(person) {
 console.log(person.name);
}

const person = {
 name: 'john'
};

print(person)

만약에 이러한 상황에서, 만약 print 함수가 다음과 같이 파라미터가 비어진 채로 실행되었다고 가정

function print(person) {
 console.log(person.name);
}

const person = {
 name. 'john'
};

print();
이 코드는 다음과 같은 에러를 생성

TypeError: Cannot read property 'name' of undefined

이러한 상황에서, 만약에 print 함수에서 object가 주어지지 않았다면, 문제가 있다 콘솔 출력?

function print(person) {
 if (person === undefined) {
  return; 
}
 console.log(person.name);
}

const person = {
 name: 'John'
};

print();

그런데 만약에 print 에 null 값이 파라미터로 전달되면 어떨까?

function print(person) {
 if (person === undefined) {
  console.log('person이 없네요');
  return;
}
 console.log(person.name);

const person = null;
print(person); 

또 오류 발생하게 된다.

TypeError: Cannot read property 'name' of null

그러면 또 print 함수에 조건을 추가해줘야 한다.

function print(person) {
 if (person === undefined || person === unll) {
  console.log('person'이 없네요');
  return:
}
 console.log(person.name);
}
 
conse person = unll;
print(person);

이것을 더 축약해서 작성 가능

function print(person) {
 if (!person) {
 console.log('person'이 없네요');
 return;
 }
 console.log(person.name);
}

const person = null;
print(person);

이게 작동하는 이유는 , undefined 와 null 은 Falsey 한 값입니다.

Falsy한 값 앞에 느낍표를 붙여주면 true로 전환된다.














