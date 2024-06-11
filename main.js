findIndex

만약에 배열 안에 있는 값이 숫자, 문자열, 또는 불리언이라면 
찾고자하는 항목이 몇번째 원소인지 알아내려면 indexOf 를 사용하면 됩니다. 

하지만, 배열 안에 있는 값이 객체이거나, 배열이라면 indexOf 로 찾을 수 없습니다.

예를 들어서 다음과 같은 배열이 있다고 가정해봅시다.

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];
여기서 만약 id 가 3 인 객체가 몇번째인지 찾으러면, findIndex 함수에 검사하고자 하는 조건을 반환하는 함수를 넣어서 찾을 수 있습니다.

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);
결과는 2가 나타납니다.

find

find 함수는 findIndex 랑 비슷한데, 찾아낸 값이 몇번째인지 알아내는 것이 아니라, 찾아낸 값 자체를 반환합니다.

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

indexOf 

indexOf 는 원하는 항목이 몇번째 원소인지 찾아주는 함수
ㄴ배열 안에 값이 숫자, 문자열 

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index);

findindex
ㄴ배열 안에 있는 값이 객체이거나, 배열이라면 indexOf로 찾을 수 없다.

const todos = [
  {
  id: 1,
  text: '자바스크립트 입문',
  done: true
  },
  {
  id: 2,
  text: '함수 배우기',
  done: true
  },
  {
  id: 3,
  text: '객체와 배열 배우기',
  done: true
  },
  {
  id: 4,
  text: '배열 내장함수 배우기',
  done: false
  }
};
//여기서 id가 3인 객체가 몇번째인 찾으려면
 
const index =todos.findindex(todo.id ===3);
console.log(index);

find

find함수는 findindex랑 비슷한데 찾아낸 값 자체를 반환한다.

const todos = [
  {
  id: 1,
  text: '자바스크립트 입문',
  done: true
  },
  {
  id: 2,
  text: '함수 배우기',
  done: true
  },
  {
  id: 3,
  text: '객체와 배열 배우기',
  done: true
  },
  {
  id: 4,
  text: '배열 내장함수 배우기',
  done: false
  }
};

const todo = todos.find(todo => todo.id ===3);
console.log(todo);

결과
{id: , text: "객체와 배열 배우기",  done: ture}
  



const todo = todos.find(todo => todo.id === 3);
console.log(todo);
결과는 다음과 같습니다.

{id: 3, text: "객체와 배열 배우기", done: true}