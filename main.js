프로토 타입과 클래스

//객체 생성자

객체 생성자는 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 구현할 수 있게 해준다.

function Animal(type, name, sound) {
 this.type = type;
 this.name = name;
 this.sound = sound;
 this.say =function() {
  console.log(this.sound);
 };
}

const dog = new Animlal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이, '야옹이', '야옹');

dog.say();
cat.say();

객체 생성자를 사용할 때는 보통 함수의 이름을 대문자로 시작하고, 새로운 객체를 만들 때에는 new 키워드를 앞에 붙여줘야 한다.

지금 위 코드를 보면, dog 가 가지고 있는 say 함수와 cat 이 가지고 있는 수행하는 코드가 똑같음에도 불구하고 객체가 생성 될때마다 함수도 새로 만들어져서 this.say로 설정이 되고 있습니다.

같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용 할 수 있는게 바로 프로토 타입니다.

프로토 타입

프로토 타입은 다음과 같이 객체 생성자 함수 아래에 .protptype.[원하는 키] = 코드를 입력하여 설정할 수 있다.

function Animal(type, name, sound) {
 this.type = type;
 this.name = name;
 this.sound = sound;
}

Animal.protype.sharedValue = 1;

const dog = new Animal('개', '멍멍이', '멍멍')
const cat = new Animal('고양이', '야옹이', '야옹')

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sdharedValue);
