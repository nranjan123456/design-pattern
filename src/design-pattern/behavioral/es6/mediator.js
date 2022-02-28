'use strict';
/* 
중재자 (Mediator)
- 수많은 객체들 간의 복잡한 상호작용(Interface)을 캡슐화하여 객체로 정의하는 패턴이다.
- 객체 사이의 의존성을 줄여 결합도를 감소시킬 수 있다.
- 중재자는 객체 간의 통제와 지시의 역할을 수행한다.
*/

class TrafficTower {
  constructor() {
    this.airplanes = [];
  }

  requestPositions() {
    return this.airplanes.map(airplane => {
      return airplane.position;
    });
  }
}

class Airplane {
  constructor(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
  }

  requestPositions() {
    return this.trafficTower.requestPositions();
  }
}

export { TrafficTower, Airplane };
