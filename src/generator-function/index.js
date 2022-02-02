function* generatorFunction() {
  console.log('This will be executed first');
  yield 'Hello';

  console.log('I will be printed after the pause');
  yield 'World!';
}

const generatorObject = generatorFunction();

console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);

function* generatorFunc() {
  yield 'a';
  return 'b'; // Generator ends here.
  yield 'a'; // Will never be executed.
}

const iterableObj = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step === 1) return { value: 'This', done: false };
        else if (step === 2) return { value: 'is', done: false };
        else if (step === 3) return { value: 'iterable', done: false };

        return { value: '', done: true };
      },
    };
  },
};

for (const val of iterableObj) {
  console.log(val);
}
