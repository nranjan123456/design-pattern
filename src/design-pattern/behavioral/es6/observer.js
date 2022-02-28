'use strict';

/*
옵서버 (Observer)
- 한 객체의 상태가 변화하면 객체에 상속되어 있는 다른 객체들에게 변화된 상태를 전달하는 패턴이다.
- 주로 분산된 시스템 간에 이벤트를 생성, 발행(Publish)하고 이를 수신(Subscribe)해야 할 때 이용한다.
*/

class Product {
  constructor() {
    this.price = 0;
    this.actions = [];
  }

  setBasePrice(val) {
    this.price = val;
    this.notifyAll();
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter(el => !(el instanceof observer));
  }

  notifyAll() {
    return this.actions.forEach(el => el.update(this));
  }
}

class Fees {
  update(product) {
    product.price = product.price * 1.2;
  }
}

class Proft {
  update(product) {
    product.price = product.price * 2;
  }
}
