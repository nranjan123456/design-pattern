'use strict';

/* 
브리지 (Bridge)
- 구현부에서 추상층을 분리하여, 서로가 독립적으로 확장할 수 있도록 구성한 패턴이다.
- 기능과 구현을 두 개의 별도 클래스로 구현한다.
*/

class Printer {
  constructor(ink) {
    this.ink = ink;
  }
}

class EpsonPrinter extends Printer {
  constructor(ink) {
    super(ink);
  }

  print() {
    return 'Printer: Epson, Ink: ' + this.ink.get();
  }
}

class HPprinter extends Printer {
  constructor(ink) {
    super(ink);
  }

  print() {
    return 'Printer: HP, Ink: ' + this.ink.get();
  }
}

class Ink {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class AcrylicInk extends Ink {
  constructor() {
    super('acrylic-based');
  }
}

class AlcoholInk extends Ink {
  constructor() {
    super('alcohol-based');
  }
}

export { EpsonPrinter, HPprinter, AcrylicInk, AlcoholInk };
