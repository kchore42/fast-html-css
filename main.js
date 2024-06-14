연습

class Food {
 construcrion(name) {
 this.name = name;
 this.brands =[];
}
 addBrand(brand) {
 this.brands.push(brand)
 }
 print() {
  console.log('${this.name}을/를 파는 음식점들:')
  console.log(this.brands.join(','));
 }
}

const pizaa = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자) ;

const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');

pizza.print()
chicken.print();

이런식으로, 클래스를 만들어서 사용하면 같은 형태를 지닌 객체들을 만들 때 객체들이 지닌 값과 함수를 보기 좋은 형태로 쉽게 관리할 수 있다.
