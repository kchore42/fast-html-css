클래스 class
클래스라는 기능은 C++, Java, C#, PHP 등의 다른 프로그래밍 언어에는 있는 기능인데 자바스크립트에는 없었기 때문에 예전 자바스크립트 (ES5) 에서는 클래스 문법이 따로 없었기 때문에 위에서 작성한 코드처럼 객체 생성자 함수를 사용하여 비슷한 작업을 구현해왔습니다.

ES6 에서부터는 class 라는 문법이 추가

class Animal {
 constructor(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound =sound;
 }
 say() {
 console.log(this.sound);
 }
}

const dog = new Animal('개', '멍멍이', '멍멍')
const cat = new Animal('고양이', '야옹이', '야옹');

dog say();
cat say();

여기서 우리가 say라는 함수를 클래스 내부에 선하였는데요, 클래스 내부의 함수를 '메서드'라고 부릅니다.

이렇게 매서드를 만들면 자동으로 prototype으로 등록이 된다.
=======================================
class 를 사용했을 때에는, 다른 클래스를 쉽게 상속 할 수 있다.

class Animal {
 constructortype(type, name, sound) { 
 this.type = type;
 this.name = name;
 this.sound =sound;
 }
 say{
 console.log(this.sound);
 } 
}

class Dog extends Animal {
 constructor(name, sound) {
  super('개', name, sound);
 } 
}

class Cat extends Aninal {
 constructor(name, sound) {
  super('고양이', name, sound);
 }
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();
==================
상속을 할 때는 extends 키워드를 사용하며, constructor에서 사용하는 super()함수가 상속받은 클래스의 생성자를 가르킵니다.

class Animal {
 constructor(type, name, sound) {
 this.type = type;
 this.name = name;
 this.sound = sound; 
 }
}

class Dog extends Animal {
 conetructor(name, sound) {
  super('개', name, sound);
 }
}

class Cat extends Animal {
 constructor(name, sound) {
  super('고양이', name, sound);
 }
}

const dog = new Dog('멍멍이', '멍멍');
const dof2 = new Dog('왈왈이', '왈왈');
const cat = new Cat('야옹이', '야옹');
const cat2 = new Cat('냐옹이', '냐옹');

dog.say();
dog2.say();
cat.say();
cat2.say();






