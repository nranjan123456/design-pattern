'use strict';

// es5
// const test = [1, 2, 3, 4];
// for (let i = 0; i < test.length; i++) {
//   console.log(test[i]);
// }

// es6
const test = [1, 2, 3, 4];
for (const i of test) {
  console.log(i);
}
const Maps = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];

const map = new Map(Maps);
for (const a of map) console.log(a);

console.log(map[1]); // undefiend

/* 
es5의 경우 test[i]를 통해 배열의 내부로 접근할 수 있으나 es6 문법인 Map, Set의 경우
map[i] 이런 식으로 접근하면 undefined가 뜨는 것을 볼 수 있다. es5에서 다루는 방식과
다른 방법으로 순회를 돈다는 뜻이다.

es6 문법은 이터레이터를 이용하여 순회를 한다. 이 이터레이터에 대해 알아보자.

이터러블은 객체의 값을 반복 순회하도록 하는 객체이다.
js에서 객체가 이터러블 하기 위해서는 해당 값에 Symbol.iterator를 가지고 있어야 한다.
해당 객체는 1개의 Symbol.iterator를 가진다. 또 Symbol.iterator의 return 값은
Symbol.iterator이다. 그렇기 때문에 아래 코드도 이상없이 작동한다.
*/

const array = [1, 2, 3, 4];
const iterator = test[Symbol.iterator]();

for (const a of iterator) {
  console.log(a);
}
/*
결론적으로 es6 문법인 Map을 정의하면 그 내부에는 Symbol.iterator라는 속성을 가지고 있고
그 속성이 순회를 돌게한다. 즉, 이터러블은 이터레이터를 리턴하는 Symbol.iterator를
가진 값으로 정의할 수 있다.

이터레이터
이터레이터는 객체를 next 메소드로 순회할 수 있는 객체이다. 좀더 쉽게 말하면 이터러블에 의해
리턴된 값이라고 볼 수 있다. 이 이터레이터는 { value, done } 객체를 가지고, next 메소드로
다음 { value, done } 값을 찾을 수 있다.

next의 특징
1. next 메소드에는 인자(argument)가 없다.
2. next 메소드의 return값은 done: boolean과 value: any를 포함하는 object를 반환해야 한다.
3. 반복이 종료될 때는 무조건 { done: true }를 리턴한다.
*/
