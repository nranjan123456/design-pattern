'use strict';

const print = console.log;

function* infinity(i = 0) {
  while (true) yield i++;
}

function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a === l) return;
  }
}

function* odd(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

console.log(0 == false);

for (const a of odd(40)) {
  print(a);
}

print([...odd(10), ...odd(20)]);
