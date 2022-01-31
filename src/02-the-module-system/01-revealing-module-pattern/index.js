const myModule = (() => {
  const privateFoo = () => {};
  const privateBar = [];

  const exported = {
    publicFoo: () => {},
    publicBar: () => {},
  };

  return exported;
})();

console.log(myModule);
console.log(myModule.privateFoo, myModule.privateBar); // undefined

const testModule = (() => {
  const privateTest = () => {};
  const privateArray = [];

  const exported = {
    publicFunction1: () => {},
    publicFunction2: () => {},
  };

  return exported;
})();

console.log(testModule);
console.log(testModule.privateTest, testModule.privateArray); // undefined
