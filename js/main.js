단축평가 논리 계산 법

true && true // true
true && false // false
true || false // true
false || true // true

const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal.name;
}

const name = getName(dog);
console.log(name); // 멍멍이

const dog = {
  name: '멍멍이'
};

function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

const name = getName();
console.log(name);

const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName();
console.log(name); // undefined

const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName(dog);
console.log(name); // 멍멍이
이게 작동하는 이유는, A && B 연산자를 사용하게 될 때에는 A 가 Truthy 한 값이라면, B 가 결과값이 됩니다. 
반면, A 가 Falsy 한 값이라면 결과는 A 가 됩니다.

console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1