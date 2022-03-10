'use stirct';

/* 
어댑터 (Adapter)
- 호환성이 없는 클래스들의 인터페이스를 다른 클래스가 이용할 수 있도록 변환해주는 패턴이다.
- 기존의 클래스를 이용하고 싶지만 인터페이스가 일치하지 않을 때 이용한다.
*/

function Soldier(lvl) {
  this.lvl = lvl;
}

Soldier.prototype.attack = function () {
  return this.lvl * 1;
};

function Jedi(lvl) {
  this.lvl = lvl;
}

Jedi.prototype.attackWithSaber = function () {
  return this.lvl * 100;
};

function JediAdapter(jedi) {
  this.jedi = jedi;
}

JediAdapter.prototype.attack = function () {
  return this.jedi.attackWithSaber();
};

module.exports = [Soldier, Jedi, JediAdapter];
