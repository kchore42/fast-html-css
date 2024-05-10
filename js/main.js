rest

rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능

객체에서의 rest

우선 객체에서의 예시를 알아볼까요?

const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);


rest 안에 color 값을 제외한 값이 들어있다

rest 는 객체와 배열에서 사용 할 때는 이렇게 비구조화 할당 문법과 함께 사용된다. 
주로 사용 할때는 위와 같이 rest 라는 키워드를 사용하게 되는데요, 
추출한 값의 이름이 꼭 rest 일 필요는 없다.

const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);
이렇게 해도 무방합니다.

이어서, attribute 까지 없앤 새로운 객체를 만들고 싶다면 이렇게 해주면 ok

const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

const { attribute, ...slime } = cuteSlime;
console.log(attribute);
console.log(slime);
