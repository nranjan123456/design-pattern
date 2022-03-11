'use strict';

/*
플라이웨이트 (Flyweight) 
- 인스턴스가 필요할 때마다 매번 생성하는 것이 아니고 가능한 한 공유해서 사용함으로써 메모리를 절약하는 패턴이다.
- 다수의 유사 객체를 생성하거나 조작할 때 유용하게 사용할 수 있다.
*/

class Color {
  constructor(name) {
    this.name = name;
  }
}

class colorFactory {
  constructor(name) {
    this.colors = {};
  }
  create(name) {
    let color = this.colors[name];
    if (color) return color;
    this.colors[name] = new Color(name);
    return this.colors[name];
  }
}

export { colorFactory };
