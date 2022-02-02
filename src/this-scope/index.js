import { check } from 'prettier';

function outside() {
  console.log(this); // undefined

  function inside() {
    console.log(this); // undefined
  }
  inside();
}

outside();

// 객체 또는 클래스 안에서 메소드를 실행한다면 this는 Object 자기 자신
let man = {
  name: 'jinhyeok',
  hello: function () {
    // 객체이므로 this는  man을 가리킨다.
    console.log('hello ' + this.name);
  },
};

man.hello(); // hello jinhyeok

function welcome() {
  console.log('welcome ' + this.name); // undefined
}

man.welcome = welcome; // man 객체의 welcome 속성에 함수 welcome을 추가
man.welcome(); // welcome jinhyeok

man.thanks = function () {
  console.log('thanks ' + this.name);
};
man.thanks(); // thanks jinhyeok

let thankYou = man.thanks;

// 객체 외부이므로 undefined
// thankYou(); // undefined

let women = {
  name: 'jinhee',
  thanks: man.thanks,
};

// this가 포함된 함수가 호출된 객체가 women이르모 thanks jinhee 출력
women.thanks();

let innerFunction = {
  name: 'jinhyeok',
  hello: function () {
    // 객체의 메소드 안 내부 함수
    function getName() {
      return this.name; // undefined
    }
    console.log('hello ' + getName());
  },
};

// innerFunction.hello();

/**========================================================================
 * binding이란 ?
 * javascript의 함수는 각자 자신만의 this라는 것을 정의한다.
 * this는 객체 내부, 객체 메서드 호출시, 생성자 new 호출시, 명시적 bind시에 따라 바뀐다.
 *
 * JavaScript에서는 각기 다른 문맥의 this를 필요에 따라 변경할 수 있도록 함수를 제공
 * call(), apply(), bind() 등이 있다.
 */

let callObject = {
  name: 'call',
  hello: function () {
    function getName() {
      return this.name;
    }
    // call()을 통해 현재 문맥에서의 this(man 객체)를 바인딩
    console.log('hello ' + getName.call(this));
  },
};

callObject.hello(); // hello call

// call, apply
const obj = { name: 'Jinhyeok ' };
const say = function (city) {
  console.log(`Hello, my name is ${this.name}, I live in ${city}`);
};

// say('seoul'); // undefined
// 첫번째 인자에 this로 setting 하고 싶은 객체를 넘겨준다.
say.call(obj, 'seoul');
say.apply(obj, ['seoul']);

const boundSay = say.bind(obj);
boundSay('seoul');

/**========================================================================
 * 생성자를 통해 객체 생성
 * 함수 앞에 new 키워드가 붙이고 선언할 때, this를 해당 객체에 바인딩
 */

function Man() {
  this.name = 'jinhyeok';
}

// 셍성자로 객체 선언
let jinhyeok = new Man();

console.log(jinhyeok.name);

// class 선언
class ClassMan {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log('hello ' + this.name);
  }
}

// 여기서 주의할 점은 new 키워드를 붙이지 않을 경우 this가 해당 객체로 바인딩
// 되지 않기 때문에 window 객체를 건드리는 일이 발생할 수 있습니다.
let goodMan = new ClassMan('jinhyeok');
goodMan.hello();

/**========================================================================
 * 화살표 함수는 ECMAScript 6에서 새로 추가된, 함수를 축약해서 사용할 수 있는 문법입니다.
 * 하지만 단순히 함수를 축약해서 사용하는 것 뿐만이 아니라 this를 외부 스코프에서 정적으로 바인딩된
 * 문맥(정적 컨텍스트, Lexical context)을 가진다는 특징을 갖고 있습니다.
 */

let object = {
  a: this,
  b: function () {
    console.log(this);
  },
  c: () => {
    console.log(this);
  },
};

object.b();
object.c();

/**
 * Lexical Scope는 함수와 변수의 Scope를 선언된 위치를 기준으로 정한다.
 * Dynamic Scope는 함수나 변수의 Scope를 호출된 시점을 기준으로 정한다.
 */
