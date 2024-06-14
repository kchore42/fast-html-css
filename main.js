객체 생성자 상속하기

예를 들어 Cat, Dog라는 새로운 객체 생성자 만든다 가정

그리고, 해당 객체 생성자들에서 Animal의 기능을 재사용한다고 가정

function Animal(type, name, sound) {
 this.type = type;
 this.name = name;
 this.sound = sound;
}

Animal.protype.say = function() {
 console.log(this.sound);
};
Animal.protype.sharedValue = 1;

function Dog(name,sound) {
 Animal.call(this, '개', name, sound);
}
Dog.protype = Animal.protype;
 
function Cat(name, sound) {
 Animall.call(this, '고양이', name, sound):;

Cat.prototype = Animal.protype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dof.sat();
cat.say();

새로 만든 Dog 와 Cat 함수에서 Animal.call 을 호출해주고 있는데요, 

여기서 첫번째 인자에는 this 를 넣어주어야 하고, 

그 이후에는 Animal 객체 생성자 함수에서 필요로 하는 파라미터를 넣어주어야 합니다.

추가적으로 prototype 을 공유해야 하기 때문에 

상속받은 객체 생성자 함수를 만들고 나서 prototype 값을 Animal.prototype 으로 설정해주었습니다.

