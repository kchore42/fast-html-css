shift 와 pop
shift 와 pop 은 비슷하지만, 다릅니다.

shift는 첫번째 원소를 배열에서 추출(추출하는 과정에서 해당 원소는 사라진다.)

const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value);
console.lof(numbers);

결과 값
[20, 30 ,40]

const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value);
console.lof(numbers);

결과 값
[10, 20, 30]

pop은 push의 반대로 생각하면 된다.

push는 배열의 맨 마지막에 새 항복을 추가
pop는 맨 마직막 항목 추출

==========================

unshift
unshift는 shift의 반대

배열릐 맨 앞에 새 원소를 추가

const numbers = [10, 20, 30, 40];
const value = numbers.unshift(5);
console.log(value);
console.lof(numbers);

[5, 10, 20, 30, 40]
================================================
concat

concat은 여러개의 배열을 하나의 배열로 합쳐준다.

const arr1 =[1, 2, 3];
const arr2 =[4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated);

결과
[1, 2, 3, 4, 5, 6];

concat 함수는 arr1과 arr2에 영향을 주지 않는다.

================================

join
join 은 배열 안의 값들을 문자열 형태로 합쳐준다.

const array = [1, 2, 3, 4, 5]
console.log(array.join()); //1,2,3,4,5
console.log(array.join( )); //1, 2, 3, 4 ,5
console.log(array.join(', ')); //1, 2, 3, 4, 5