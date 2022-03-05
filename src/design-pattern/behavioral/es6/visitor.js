'use strict';

/* 
방문자 (Visitor)
- 각 클래스들의 데이터 구조에서 처리 기능을 분리하여 별도의 클래스로 구성하는 패턴이다.
- 분리된 처리 기능은 각 클래스를 방문(Visit)하여 수행한다.
*/

function bonusVisitor(employee) {
  if (employee instanceof Manager) employee.bonus = employee.salary * 2;
  if (employee instanceof Developer) employee.bonus = employee.salary;
}

class Employee {
  constructor(salary) {
    this.bonus = 0;
    this.salary = salary;
  }

  accept(visitor) {
    visitor(this);
  }
}

class Manager extends Employee {
  constructor(salary) {
    super(salary);
  }
}

class Developer extends Employee {
  constructor(salary) {
    super(salary);
  }
}

export { Developer, Manager, bonusVisitor };
