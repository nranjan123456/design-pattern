'use strict';

/*
퍼싸드 (Facade)
- 복잡한 서브 클래스들을 피해 더 상위에 인터페이스를 구성함으로써 서브 클래스들의 기능을 간편하게 사용할 수 있도록
하는 패턴이다.
- 서브 클래스들 사이의 통합 인터페이스를 제공하는 Wrapper 객체가 필요하다.
*/

class ShopFacade {
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fees = new Fees();
  }

  calc(price) {
    price = this.discount.calc(price);
    price = this.fees.calc(price);
    price += this.shipping.calc();
    return price;
  }
}

class Discount {
  calc(value) {
    return value * 0.9;
  }
}

class Shipping {
  calc() {
    return 5;
  }
}

class Fees {
  cacl(value) {
    return value * 1.05;
  }
}
