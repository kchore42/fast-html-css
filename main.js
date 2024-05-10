값에 따라 다른 결과물을 반환 해야 할 때

주어진 값에 따라 다른 결과물을 반환해야 할 때 사용 할 수 있는 유용한 팁

예를 들어서, 동물 이름을 받아오면, 동물의 소리를 반환하는 함수를 만들고 싶다고 가정

function getSound(animal) {
  if (animal === '개') return '멍멍!';
  if (animal === '고양이') return '야옹~';
  if (animal === '참새') return '짹짹';
  if (animal === '비둘기') return '구구 구 구';
  return '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구

if 문의 코드 블록이 한 줄 짜리라면 { } 를 생략 할 수도 있습니다.

만약 여기서 우리가 배운 switch case 문을 사용하여 다음과 같이 구현 할 수도 있다.

function getSound(animal) {
  switch (animal) {
    case '개':
      return '멍멍!';
    case '고양이':
      return '야옹~';
    case '참새':
      return '짹짹';
    case '비둘기':
      return '구구 구 구';
    default:
      return '...?';
  }
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구

참고로 switch 문에서 return 을 할 때에는 break 를 생략해도 된다.

우리가 방금 구현한 코드는 큰 문제는 없지만, 이걸 깔끔하게 해결 할 방법을 알고 나면 좀 맘에 들지 않는 코드의 형태이다.

이 코드를 더욱 깔끔하게 작성하는 방법

function getSound(animal) {
  const sounds = {
    개: '멍멍!',
    고양이: '야옹~',
    참새: '짹짹',
    비둘기: '구구 구 구'
  };
  return sounds[animal] || '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구

훨씬 더 간략하고 가독성도 좋다.

이렇게 특정 값에 따라 반환해야 하는 값이 다른 조건이 여러가지 있을 때는 객체를 활용하면 좋다.