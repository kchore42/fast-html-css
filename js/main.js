|| 연산자로 코드 단축시키기

const namelessDog = {
  name: ''
};

function getName(animal) {
  const name = animal && animal.name;
  if (!name) {
    return '이름이 없는 동물입니다';
  }
  return name;
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.

위 코드는 || 연산자를 사용하면 다음과 같이 단축시킬 수 있습니다.

A || B 는 만약 A 가 Truthy 할경우 결과는 A 가 됩니다. 
반면, A 가 Falsy 하다면 결과는 B 가 됩니다.

const namelessDog = {
  name: ''
};

function getName(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.