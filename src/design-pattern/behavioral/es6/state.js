'use strict';

/*
상태 (State)
- 객체의 상태에 따라 동일한 동작을 다르게 처리해야 할 때 사용하는 패턴이다.
- 객체 상태를 캡슐화하고 이를 참조하는 방식으로 처리한다.
*/

class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('delivered', Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Delivered);
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  }
}

export default Order;
