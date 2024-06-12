
객체 비구조화 할당

print 함수를 보시면 파라미터로 받아온 hero 내부의 값을 조회 할 때 마다 hero. 를 입력하고 있는데, 

객체 비구조화 할당이라는 문법을 사용하면 코드를 더욱 짧고 보기 좋게 작성 할 수 있습니다.

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
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
똑같은 결과가 나타났나요?

const { alias, name, actor } = hero;
이 코드가 객체에서 값들을 추출해서 새로운 상수로 선언해 주는 것 입니다.

여기서 더 나아가면, 파라미터 단계에서 객체 비구조화 할당을 할 수도 있습니다.

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

function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
test