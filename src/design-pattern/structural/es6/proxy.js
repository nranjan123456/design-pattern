'use strict';

/*
프록시 (Proxy)
- 접근이 어려운 객체와 여기에 연결하려는 객체 사이에서 인터페이스 역할을 수행하는 패턴이다.
- 네트워크 연결, 메모리의 대용량 객체로의 접근 등에 주로 이용한다.
*/

class Car {
  drive() {
    return 'driving';
  }
}

class CarProxy {
  constructor(driver) {
    this.driver = driver;
  }
  drive() {
    return this.driver.age < 18 ? 'too young to drive' : new Car().drive();
  }
}

class Driver {
  constructor(age) {
    this.age = age;
  }
}

export { Car, CarProxy, Driver };
