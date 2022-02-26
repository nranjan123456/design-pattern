'use strict';

function* gen() {
  yield 1;
  yield 2;
  yield 3;

  // 제네레이터에는 리턴값을 만들 수 있고, done이 true일때 value로 저장
  // 순회할 때는 리턴값을 무시한다.
  return 100;
}

// 제네레이터 함수를 실행한 결과는 이터레이터이다.
let iter = gen();

console.log(iter[Symbol.iterator]() === iter);

// for (const a of iter) {
//   console.log(a);
// }

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function* gen2() {
  yield 'test1';
  yield 'test2';
  yield 'test3';

  return 'good';
}

let iter2 = gen2();

console.log(iter2[Symbol.iterator]() === iter2);

console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
