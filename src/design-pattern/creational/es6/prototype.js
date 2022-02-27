'use strict';
/*
프로토타입 (Prototype)
- 원본 객체를 복제하는 방법으로 객체를 생성하는 패턴이다.
- 일반적인 방법으로 객체를 생성하며 비용이 큰 경우 주로 이용한다.
*/

class Sheep {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  clone() {
    return new Sheep(this.name, this.weight);
  }
}

export default Sheep;
