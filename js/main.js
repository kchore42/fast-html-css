배열에서의 rest
다음, 배열에서의 사용 예시를 알아봅시다.

const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one);
console.log(rest);


배열 비구조화 할당을 통하여 원하는 값을 밖으로 꺼내고, 나머지 값을 rest 안에 넣었습니다.

반면 이렇게 할 수는 없답니다.

const numbers = [0, 1, 2, 3, 4, 5, 6];

const [..rest, last] = numbers;