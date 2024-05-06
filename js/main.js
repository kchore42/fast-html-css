switch/case 문

switch/case 문은 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용합니다.

const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('모르겠네요..');
}
break는 비교 끝났다는 표시

switch/case 문에서는 각 case 에서 실행할 코드를 작성하고 맨 마지막에 break; 를 해주어야 합니다. break 를 하지 않으면 그 다음 case 의 코드까지 실행해버립니다.