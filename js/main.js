// Not !
// And &&
// OR ||

const a = !true;
console.log(a);

a 값은 false 

const b = !false;
console.log(b);

b 값은 true


ND 연산자는 양쪽의 값이 둘 다 true 일때만 결과물이 true

const a = true && true;
console.log(a);

다음과 같은 상황엔 모두 false

let f = false && false;
f = false && true;
f = true && false;

OR 연산자는 양쪽의 값 중 하나라도 true 라면 결과물이 true/  그리고, 두 값이 둘 다 false 일 때에만 false

반면 상황엔 false 

let f = false || false;

연산 순서
순서는 NOT -> AND -> OR 

const value = !((true && false) || (true && false) || !false);

!((true && false) || (true && false) || true);

!(false || false || true);

!true;
결국 결과값 false 


