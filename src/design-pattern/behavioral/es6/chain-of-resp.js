'use strict';
/*
책임 연쇄 (Chain of Responsibility)
- 요청을 처리할 수 있는 객체가 둘 이상 존재하여 한 객체가 처리하지 못하면 다음 객체로 넘어가는 형태의 패턴이다.
- 요청을 처리할 수 있는 각 객체들이 고리(Chain)으로 묶여 있어 요청이 해결될 때까지 고리를 따라 책임이 넘어간다.
*/

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(p) {
    this.products.push(p);
  }
}

class Discount {
  calc(products) {
    let ndiscount = new NumberDiscount();
    let pdiscount = new PriceDiscount();
    let none = new NoneDiscount();
    ndiscount.setNext(pdiscount);
    pdiscount.setNext(none);
    return ndiscount.exec(products);
  }
}

class NumberDiscount {
  constructor() {
    this.next = null;
  }

  setNext(fn) {
    this.next = fn;
  }

  exec(products) {
    let result = 0;
    if (products.length > 3) {
      result = 0.05;

      return result + this.next.exec(products);
    }
  }
}

class PriceDiscount {
  constructor() {
    this.next = null;
  }

  setNext(fn) {
    this.next = fn;
  }

  exec(products) {
    let result = 0;
    let total = products.reduce((a, b) => a + b);

    if (total >= 500) {
      result = 0.1;
      return result + this.next.exec(products);
    }
  }
}

class NoneDiscount {
  exec() {
    return 0;
  }
}

export { ShoppingCart, Discount };
