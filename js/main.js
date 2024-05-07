shift 와 pop
shift 와 pop 은 비슷하지만, 다릅니다.

shift 는 첫번째 원소를 배열에서 추출해줍니다. (추출하는 과정에서 배열에서 해당 원소는 사라집니다.)

const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value);
console.log(numbers);

결과는 다음과 같습니다.

10
[20, 30, 40]

이번엔 pop 을 해볼까요?

const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value);
console.log(numbers);
결과는 다음과 같습니다.

40
[10, 20, 30]
pop 은 push 의 반대로 생각하시면 됩니다. push 는 배열의 맨 마지막에 새 항목을 추가하고, pop 은 맨 마지막 항목을 추출합니다.


unshift
unshift 는 shift 의 반대입니다.

배열의 맨 앞에 새 원소를 추가합니다.

const numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers);
결과는 다음과 같습니다.

[5, 10, 20, 30, 40]

concat
concat 은 여러개의 배열을 하나의 배열로 합쳐줍니다.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated);
결과는 다음과 같습니다.

[1, 2, 3, 4, 5, 6];
concat 함수는 arr1 과 arr2 에 변화를 주지 않습니다.

join
join 은 배열 안의 값들을 문자열 형태로 합쳐줍니다.

const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5