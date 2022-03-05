'use strict';

/* 
템플릿 메소드 (Template Method)
- 상위 클래스에서 골격을 정의하고, 하위 클래스에서 세부 처리를 구체화하는 구조의 패턴이다.
- 유사한 서브 클래스를 묶어 공통된 내용을 상위 클래스에 정의함으로써 코드의 양을 줄이고 유지보수를 용이하게 해준다.
*/

class Tax {
  calc(value) {
    if (value >= 1000) value = this.overThousand(value);

    return this.complementaryFee(value);
  }

  complementaryFee(value) {
    return value + 10;
  }
}

class Tax1 extends Tax {
  constructor() {
    super();
  }

  overThousand(value) {
    return value * 1.1;
  }
}

class Tax2 extends Tax {
  constructor() {
    super();
  }

  overThousand(value) {
    return value * 1.2;
  }
}

export { Tax1, Tax2 };
