점수를 성적등급으로 변환하기

이번에는 점수가 주어졌을 때 A, B, C, D, F 등급을 반환하는 함수를 만들어봅시다.

function getGrade(score) {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score === 89) {
    return 'B+';
  } else if (score >= 80) {
    return 'B';
  } else if (score === 79) {
    return 'C+';
  } else if (score >= 70) {
    return 'C';
  } else if (score === 69) {
    return 'D+';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

const grade = getGrade(90);
console.log(grade);

grade 가 90 일 때에는 결과가 A 가 됩니다.
=========================================================
화살표 함수

함수를 선언하는 방식 중 또 다른 방법은 화살표 함수 문법을 사용 하는 것 입니다.

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

function 키워드 대신에 => 문자를 사용해서 함수를 구현했는데요, 

화살표의 좌측에는 함수의 파라미터, 화살표의 우측에는 코드 블록이 들어옵니다.

그런데, 만약에 위와 같이 코드 블록 내부에서 바로 return 을 하는 경우는 다음과 같이 줄여서 쓸 수도 있습니다.

const add = (a, b) => a + b;
console.log(add(1, 2));

아까 만들었던 getGrade 함수처럼 여러 줄로 구성되어있는 경우에는 코드 블록을 만들어야합니다.

const getGrade = score => {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score === 89) {
    return 'B+';
  } else if (score >= 80) {
    return 'B';
  } else if (score === 79) {
    return 'C+';
  } else if (score >= 70) {
    return 'C';
  } else if (score === 69) {
    return 'D+';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};
const grade = getGrade(90);
console.log(grade);

화살표 함수와 일반 function 으로 만든 함수와의 주요 차이점은 

화살표 함수에서 가르키는 this 와
 function 에서 가르키는 this 가 서로 다르다는 건데요, 

이에 대한 자세한 내용은 나중에 알아보도록 하겠습니다.

함수

함수는, 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 기능

const a = 1;
const b = 2;
const sum=a + b;

함수로 만들어 보자!
function add(a, b) {
 return a + b;
}

const sum = add(1, 2);
console.log(sum);
결과 값 3

함수를 만들 때는 function 키워드를 사용하며, 
함수에서 어떤 값을 받아올지 정해주는데 이를 파라미커(매개 변수)라고 부른다.

함수 내부에서 return 키워드를 사용하여 함수의 결과물을 지정할 수 있다.

추가적으로, return을 하게 되면 함수가 끝난다.

Hello, name!

function hello(name) {
 console.log('Hello,' + name + '!');
}

hello(velopert);

결과물: "Hello, velopert!"

+ 연산자를 사용

이렇게 문자열을 조합 할 때 + 를 사용해도 큰 문제는 없지만, 더욱 편하게 조합을 하는 방법이 있습니다. 

바로, ES6 의 템플릿 리터럴 (Template Literal)이라는 문법을 사용하는 것

템플릿 리터럴을 사용하여 구현

frunction hello(name) {
 console.log('Hello, ${name}!');
}
hello('velopert');

====================
점수를 성적 등급으로 변환

function getGrade(score) {
 if (score === 100) {
 return "A+';
 } else if (score >= 90) {
 return 'A';
 } else if (score ===89) {
 return 'B+';
 } else if (score >= 80) {
 return 'B';
 } else if (score ===79) {
 return 'C+';
 } else if (score >= 70) {
 return 'C';
 } else if (score === 69) {
 return 'D+';
 } else if (score >= 60) {
 return 'D'
 } else {
  return'F';
 }
}
const grade = getGrade(90);
consloe.log(grade);

====================
화살표 함수 

함수를 선언하는 방식 중 또 다른 방법은 화살표 문법을 사용하는 것

const add = (a, b) => {
 return a + b;
};

console.log(add(1, 2));

function 키워드 대신에 => 문자르 사용해서 함수 구현

화살표의 좌측에는 함수의 파라미터, 화살표의 우측에는 코드 블록이 들어간다.

코드 블록  내부에서 바로 return도 가능

const add = (a, b) => a+b;
console.log(add(1, 2));
