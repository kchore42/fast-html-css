07. spread 와 rest

이번에는 ES6 에서 도입된 spread 와 rest 문법에 대해서 알아보겠습니다. 

서로 완전히 다른 문법인데, 은근히 좀 비슷하다

spread

spread 라는 단어가 가지고 있는 의미는 펼치다, 퍼뜨리다  

이 문법을 사용하면, 객체 혹은 배열을 펼칠 수 있다.

예를 들어서 다음과 같은 객체들이 있다고 가정

const slime = {
  name: '슬라임'
};

const cuteSlime = {
  name: '슬라임',
  attribute: 'cute'
};

const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);


이 코드에서는 먼저 slime 이라는 객체를 선언

그리고 cuteSlime 이라는 객체를 만들었는데요, 

기존에 선언한 slime 을 건들이지 않고 새로운 객체를 만들어서 slime 이 가지고 있는 값을 그대로 사용

그 다음에는 purpleCuteSlime 이라는 객체를 만들었는데요, 

이 객체는 cuteSlime 이 가지고 있는 속성을 그대로 사용하면서 추가적으로 color 가 추가

위 코드에서의 핵심은, 기존의 것을 건들이지 않고, 새로운 객체를 만든다는 것 인데요, 

이러한 상황에 사용 할 수 있는 유용한 문법이 spread 

아까 코드는 spread 문법을 사용하면 다음과 같이 작성 할 수 있다.

const slime = {
  name: '슬라임'
};

const cuteSlime = {
  ...slime,
  attribute: 'cute'
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

여기서 사용한 ... 문자가 바로 spread 연산자

spread 연산자는 배열에서도 사용 할 수 있습니다.

const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);


기존의 animals 는 건드리지 않으면서, 새로운 anotherAnimals 배열에 animals 가 가지고 있는 내용을 모두 집어넣고, 
'비둘기' 라는 항목을 추가

배열에서 spread 연산자를 여러번 사용 할 수도 있다.

const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]