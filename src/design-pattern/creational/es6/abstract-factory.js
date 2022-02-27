'use strict';
/*
추상 팩토리 (Abstract Factory)
- 구체적인 클래스에 의존하지 않고, 인터페이스를 통해 서로 연관, 의존하는 객체들의 그룹으로 생성하여
추상적으로 표현한다.
- 연관도니 서브 클래스를 묶어 한 번에 교체하는 것이 가능하다.
*/

function droidProducer(kind) {
  if (kind === 'battle') return battleDroidFactory;
  return pilotDroidFactory;
}

function battleDroidFactory() {
  return new B1();
}

function pilotDroidFactory() {
  return new Rx24();
}

class B1 {
  info() {
    return 'B1, Battle Droid';
  }
}

class Rx24 {
  info() {
    return 'Rx24, Pilot Droid';
  }
}

export default droidProducer;
