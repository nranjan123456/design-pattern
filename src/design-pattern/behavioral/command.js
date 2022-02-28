'use strict';

/*
커맨드 (Command)
- 요청을 객체의 형태로 캡슐화하여 재이용하거나 취소할 수 있도록 요청에 필요한 정보를 저장하거나 로그에 남기는 패턴이다.
- 요청에 사용되는 각종 명령어들을 추상 클래스와 구체 클래스로 분리하여 단순화한다.
*/

function Cockpit(command) {
  this.command = command;
}

Cocpit.prototype.execute = function () {
  this.command.execute();
};

function Turbine() {
  this.speed = 0;
  this.state = false;
}

Turbine.prototype.on = function () {
  this.state = true;
  this.speed = 100;
};

Turbine.prototype.off = function () {
  this.speed = 0;
  this.state = false;
};

Turbine.prototype.speedDown = function () {
  if (!this.state) return;

  this.speed -= 100;
};

Turbine.prototype.speedUp = function () {
  if (!this.state) return;

  this.speed += 100;
};

function OnCommand(turbine) {
  this.turbine = turbine;
}

OnCommand.prototype.execute = function () {
  this.turbine.on();
};

function OffCommand(turbine) {
  this.turbine = turbine;
}

OffCommand.prototype.execute = function () {
  this.turbine.off();
};

function SpeedUpCommand(turbine) {
  this.turbine = turbine;
}

SpeedUpCommand.prototype.execute = function () {
  this.turbine.speedUp();
};

function SpeedDownCommand(turbine) {
  this.turbine = turbine;
}

SpeedDownCommand.prototype.execute = function () {
  this.turbine.speedDown();
};

module.exports = [
  Cockpit,
  Turbine,
  OnCommand,
  OffCommand,
  SpeedUpCommand,
  SpeedDownCommand,
];
