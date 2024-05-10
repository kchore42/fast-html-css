깊은 값 비구조화 할당

객체의 깊숙한 곳에 들어있는 값을 꺼내는 방법

예를 들어 다음과 같은 객체가 있다고 가정

const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};
여기서, name, languages, value 값들을 밖으로 꺼내주고 싶다면 어떻게 해야 할까? 

이럴땐 두가지 해결 방법이 있다. 

첫번째: 비구조화 할당 문법을 두 번 사용하는 것

const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
  name,
  languages,
  value
};

console.log(extracted); // {name: "velopert", languages: Array[3], value: 5}

그런데 잠깐! 

지금 extracted 객체를 선언 할 때 이런식으로 했는데요

const extracted = {
  name,
  languages,
  value
}
이 코드는 다음 코드와 똑같습니다.

const extracted = {
  name: name,
  languages: languages,
  value: value
}

만약에 key 이름으로 선언된 값이 존재하다면, 바로 매칭시켜주는 문법입니다. 

이 문법은 ES6 의 object-shorthand 문법이라고 부릅니다. (이름은 굳이 알아둘 필요는 없습니다..!)

다시 본론으로 돌아와서, 

아까 deepObject 객체에서 names, languages, value 를 추출하는 과정에서 비구조화 할당을 두번 했었죠?

이번엔 두번째 방법, 한번에 모두 추출하는 방법을 알아보겠습니다.

const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

const {
  state: {
    information: { name, languages }
  },
  value
} = deepObject;

const extracted = {
  name,
  languages,
  value
};

console.log(extracted);

이렇게 하면 깊숙히 안에 들어있는 값도 객체에서 바로 추출 할 수 있다.