-------------------------------------------------------------------------------------------------

02. Truthy and Falsy(2)

undefined 와 null 은 Falsy 한 값이다. Fasly 한 값 앞에 느낌표 를 붙여주면 true로 전환된다.

console.log(!undefined);
consolelog(!null);

Falsy 한 값은 이 외에도 몇개 더 있다.

console.log(!undefined);
console.log(!null);
consolel.log(!0);
console.log(!'');
consolel.(!NaN);

이 값은 모두 true가 됩니다.

NAN(= Not A Number)의 의미를 가지고 있다.

보통 NaN 은 문자열을 숫자로 변환하는 자바스크립트 기본 함수 parselnt 라는 함수를 사용하게 될 때 볼 수 있다.

//parseInt() 는 문자열 타입의 매개변수를 정수로 리턴해주는 함수

const num = parselnt('15', 10); // 10진수 15를 숫자로 변환겠다는 의미 
console.log(num); // 10
const notnum = parselnt)('야호~', 10);
console.log(notnum); // NaN

다시 본론으로 돌아와서, Falsy 한 값은 아까 나열한 다섯 가지입니다.

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);

그리고, 그 외의 값은 모두! Truthy한 값입니다.

console.log(!3);
console.log(!'hello');
consolel.log(!['array?']
console.log(![])
console.log(!{value: 1 });

이번에는 아까와는 반대로 모든 값이 false가 된다.

Truthty한 값과 Falsy 한 값은 if문에서도 사용할 수 있다.

const value = { a: 1 };
if (value) { 
 console.log('value 가 Truthy 하네요.');
}

value가 Truthy 한 값이기 때문에, 콘솔에 메시지가 출력될 것입니다. 
반면,  value가 null, undefined, 0, '', NaN 중 하나라면, 나타나지 않을 것이다.

그래서 이렇게. Truthy 한 값과 Falsy 한 값을 잘 알아놓으면 조건문을 작성할 때 편하다.
-------------------------------------------------------------------------------------------------

알아두면 유용한 팁 하나!!

만약에, 특정 값이 Truthy 한 값이라면, 그렇지 않다면 false로 값을 표현하는 것을 구현해보겠습니다

const.= value ={ :1};

const truthy = value ? true: falself;

우리가 이전에 배운 삼항연산자를 사용하면 쉽게 value 값의 존재 유무에 따라 쉽게 true 및 false
로 전환이 가능하다.

const value = { a:1 };
const truthy = !!value;
!value 는 false가 되고, 여기에 !false 는 true가 되어서, 결과는 true가 된다.
