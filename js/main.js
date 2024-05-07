break 와 continue
반복문 안에서는 break 와 continue 를 통하여 반복문에서 벗어나거나, 그 다음 루프를 돌게끔 할 수 있음

for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 다음 루프를 실행
  console.log(i);
  if (i === 5) break; // 반복문을 끝내기
}
i 가 2 일땐 continue 를 하여 원래 console.log 를 해야 하지만 그 코드를 수행하지 않고 바로 3으로 넘어감.

i 가 5 일땐 break 를하여 반복문을 종료
