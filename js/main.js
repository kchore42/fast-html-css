반복문 - for...of, for...in

for...of
for...of문은 배열에 관한 반복문을 돌리기 위해서 만들어진 반복문

let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}


객체를 위한 반복문 for...in

const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

각 함수의 역할은 다음과 같습니다.

Object.entries: [[키, 값], [키, 값]] 형태의 배열로 변환
Object.keys: [키, 키, 키] 형태의 배열로 변환
Object.values: [값, 값, 값] 형태의 배열로 변환

객체가 지니고 있는 값에 대하여 반복을 하고 싶다면 위 함수들을 사용해도 되고, 
for...in 구문을 사용해도 됨.

const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}