객체 안에 함수 넣기
객체 안에 함수를 넣을 수도 있습니다. 

const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function say() {
    console.log(this.sound);
  }
};

dog.say();
결과는 다음과 같습니다.

멍멍!
함수가 객체안에 들어가게 되면, this 는 자신이 속해있는 객체를 가르키게 됩니다.

함수를 선언 할 때에는 이름이 없어도 됩니다.

const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function() {
    console.log(this.sound);
  }
};

const cay{
    name: '고양이',
    sound: '야옹~',
    say: function() {
      console.log(this.sound);
    }
  };
  
cat .say = dog.say;
dog.say();
cat.say();

이전과 똑같이 작동 할 것

객체 안에 함수를 넣을 때, 화살표 함수로 선언한다면 제대로 작동하지 않습니다.

이유는, function 으로 선언한 함수는 this 가 제대로 자신이 속한 객체를 가르키게 되는데, 화살표 함수는 그렇지 않기 때문입니다.