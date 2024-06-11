Getter 함수와 Setter 함수

객체 안에 Getter 함수와 Setter 함수를 설정하는 방법을 알아봅시다. 

객체를 만들고 나면, 다음과 같이 객체안의 값을 수정 할 수도 있는데요,

const numbers = {
  a: 1,
  b: 2
};

numbers.a = 5;
console.log(numbers);


Getter 함수와 Setter 함수를 사용하게 되면 특정 값을 바꾸려고 하거나, 특정 값을 조회하려고 할 때 우리가 원하는 코드를 실행 시킬 수 있습니다.

다음 코드를 따라 적어보세요.

const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다!');
    return this.a + this.b;
  }
};

console.log(numbers.sum);
numbers.b = 5;

console.log(numbers.sum);


우리는 numbers.sum() 을 한 것이 아니라 number.sum 을 조회했을 뿐인데, 함수가 실행되고 그 결과값이 출력되었습니다.

이런식으로 Getter 함수는 특정 값을 조회 할 때 우리가 설정한 함수로 연산된 값을 반환합니다.

이번에는 Setter 함수를 사용해봅시다.

const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log('a가 바뀝니다.');
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log('b가 바뀝니다.');
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);


Setter 함수를 설정 할 때에는 함수의 앞부분에 set 키워드를 붙입니다.

Setter 함수를 설정하고 나면, numbers.a = 5 이렇게 값을 설정했을 때 5 를 함수의 파라미터로 받아오게 됩니다. 위 코드에서는 객체 안에 _a, _b 라는 숫자를 선언해주고, 이 값들을 위한 Getter 와 Setter 함수를 설정해주었습니다.

아까 전에는 만든 객체에서는 numbers.sum 이 조회 될 때마다 덧셈이 이루어졌었지만, 이제는 a 혹은 b 값이 바뀔 때마다 sum 값을 연산합니다.