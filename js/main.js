02. Truthy and Falsy
이것은 자바스크립트 문법까지는 아니지만, 알아둬야 하는 개념입니다.

Truthy: true 같은거... Falsy: false 같은거...

라고 이해를 하면 되는데요

function print(person) {
  console.log(person.name);
}

const person = {
  name: 'John'
};

print(person);
만약에 이러한 상황에서, 만약 print 함수가 다음과 같이 파라미터가 비어진 채로 실행됐다고 가정해봅시다.

function print(person) {
  console.log(person.name);
}

const person = {
  name: 'John'
};

print();

Falsy 한 값은 이 외에도 몇개 더 있습니다.

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
