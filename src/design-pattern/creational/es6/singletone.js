'use strict';

/*
싱글톤 (Singleton)
- 하나의 객체를 생성하면 생성된 객체를 어디서든 참조할 수 있지만, 여러 프로세스가 동시에 참조할 수는 없다.
- 클래스 내에서 인스턴스가 하나뿐임을 보장하며, 불필요한 메모리 낭비를 최소화할 수 있다.
*/

class Person {
  constructor() {
    if (typeof Person.instance === 'object') return Person.instance;
    Person.instance = this;
    return this;
  }
}

export default Person;
