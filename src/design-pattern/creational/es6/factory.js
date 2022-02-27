'use strict';
/*
팩토리 메소드 (Factory Method)
- 객체 생성을 서브 클래스에서 처리하도록 분리하여 캡슐화한 패턴이다.
- 상위 클래스에서 인터페이스만 정의하고 실제 생성은 서브 클래스가 담당한다.
- 가상 생성자 (Virtual Constructor) 패턴이라고도 한다.
*/

class BmwFactory {
  static create(type) {
    if (type === 'X5') return new Bmw(type, 108000, 300);
    if (type === 'X6') return new Bmw(type, 111000, 320);
  }
}

class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

export default BmwFactory;
