'use strict';

/*
메멘토 (Memento)
- 특정 시점에서의 객체 내부 상태를 객체화함으로써 이후 요청에 따라 객체를 해당 시점의 상태로 돌릴 수 있는 기능을 제공하는 패턴이다.
- Ctrl + z와 같은 되돌리기 기능을 개발할 때 주로 이용한다.
*/

class Memento {
  constructor(value) {
    this.value = value;
  }
}

const originator = {
  store: function (val) {
    return new Memento(val);
  },
  restore: function (memento) {
    return memento.value;
  },
};

class Caretaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}

export { originator, Caretaker };
