'use strict';

const phaseA = 'getRide';
const phaseB = 'getStart';
const phaseC = 'getBreak';
const phaseD = 'getStop';

const obj = {
  [phaseA]: () => {
    return '자동차에 탑니다.';
  },
  [phaseB]: () => {
    return '시동을 겁니다.';
  },
  [phaseC]: () => {
    return '브레이크를 밟습니다.';
  },
  [phaseD]: () => {
    return '자동차를 멈춥니다.';
  },
};

console.log(obj['getRide']());
console.log(obj['getStart']());
console.log(obj['getBreak']());
console.log(obj['getStop']());
