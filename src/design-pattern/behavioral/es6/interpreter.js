'use strict';
/*
인터프리터 (Interpreter)
- 언어에 문법 표현을 정의하는 패턴이다.
- SQL이나 통신 프로토콜과 같은 것을 개발할 때 사용한다.
*/

class Sum {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() + this.right.interpret();
  }
}

class Min {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() - this.right.interpret();
  }
}

class Num {
  constructor(val) {
    this.val = val;
  }

  interpret() {
    return this.val;
  }
}

export { Num, Min, Sum };
