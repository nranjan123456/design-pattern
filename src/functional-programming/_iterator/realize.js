'use strict';

// let iterator = '12'[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

const print = console.log;
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator = iterable[Symbol.iterator]();
// print(iterator.next());
// print(iterator.next());
// print(iterator.next());
// print(iterator.next());
for (const a of iterator) print(a);

const practice = {
  [Symbol.iterator]() {
    let i = 2;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

const iterator2 = practice[Symbol.iterator]();
print(iterator2.next());
print(iterator2.next());
print(iterator2.next());
