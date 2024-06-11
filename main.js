splice

splice는 배열에서 특정 항목을 제거할 때 사용한다.

const numbers = [10, 20, 30, 40];
위 배열에서 30을 지운다고 가정 

const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
console.log(numbers)

splice를 사용할 때 첫번째 파라미터는 어떤 인덱스를 지울지를 의미
두번째 파라미터는 그 인덱스부터 몇개를 지울지 의미

==========================
slice
배열을 잘라낼 때 사용, 중요한 것은 기존의 배열을 건드리지 않는다는 것

const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0,2); // 0부터 시작해서 2전까지

console.log(sliced); /[10, 20]
console.log(numbers); //[10, 20, 30, 40]

slice에는 두개의 파라미터를 넣게 되는데 첫번째 파라미터는 어디서부터 자를지, 그리고 두번째 파라미터는 어디까지 자를지를 의미