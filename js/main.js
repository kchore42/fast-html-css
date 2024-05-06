06. 객체
객체는 우리가 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해줍니다.

const dog = {
  name: '멍멍이',
  age: 2
};

console.log(dog.name);
console.log(dog.age);
결과물은 다음과 같습니다.

멍멍이
2
객체를 선언 할 때에는 이렇게 { } 문자 안에 원하는 값들을 넣어주면 됩니다. 값을 집어 넣을 때에는

키: 원하는 값
형태로 넣으며, 키에 해당하는 부분은 공백이 없어야합니다. 만약에 공백이 있어야 하는 상황이라면 이를 따옴표로 감싸서 문자열로 넣어주면 됩니다.

const sample = {
  'key with space': true
};

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
  };
  
  const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
  };
  
  console.log(ironMan);
  console.log(captainAmerica);

  객체 비구조화 할당
  print 함수를 보시면 파라미터로 받아온 hero 내부의 값을 조회 할 때 마다 hero. 를 입력하고 있는데, 객체 비구조화 할당이라는 문법을 사용하면 코드를 더욱 짧고 보기 좋게 작성 할 수 있습니다.
  
  이 문법은 "객체 구조 분해" 라고 불리기도 합니다.

  const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
  };
  
  const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
  };
  
  function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${
      hero.actor
    } 입니다.`;
    console.log(text);
  }
  
  print(ironMan);
  print(captainAmerica);
  
  
  