05. 조건문 더 스마트하게 쓰기

특정 값이 여러 값 중 하나인지 확인해야 할 때
만약, 특정 값이 여러 값 중 하나인지 확인을 해야 하는 상황이이라면!

그러면, 이러한 시도를 할 수도 있을 것입니다.

function isAnimal(text) {
  return (
    text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
  );
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
비교해야 할 값이 많아질 수록 코드는 길어집니다.

이러한 코드를 간단하게 해결 할 수 있는 방법은, 
배열을 만들고 배열의 includes 함수를 사용하는 것 

function isAnimal(name) {
  const animals = ['고양이', '개', '거북이', '너구리'];
  return animals.includes(name);
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false

원한다면, animals 배열을 선언하는 것도 생략하고, 화살표 함수로 작성할 수도 있습니다.

const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false

물론, 코드가 짧다고 해서 무조건 좋은것은 아닙니다. 
단, 코드가 짧으면서도 읽었을 때 어떤 역할을 하는지 잘 이해가 될 수 있어야 비로소 좋은 코드