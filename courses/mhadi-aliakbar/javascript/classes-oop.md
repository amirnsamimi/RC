## Object Oriented Programming and classes

```js
//old version of class using prototype and function constructor

function Person(firstName, age) {
  this.firstName = firstName;
  return this;
}

Person.prototype.say = function (sentence) {
  console.log(`${this.firstName} said '${sentence}'`);
};

const hadi = new Person("Hadi");
hadi.say("salam");

// Prototype Inheritence *

String.prototype.custom = function () {
  console.log(this.toUpperCase());
};

console.log("test".cutom()); // TEST

// new version

class Person {
  #age = 10; // # private
  constructor(name, age) {
    this.#age = age;
    this.name = this.name.bind(this);
  }

  get name() {
    return this.name.toUpperCase();
  }

  set name() {
    this.name = name.toLowerCase();
  }

  say(sentence) {
    console.log(`${this.name}`);
  }
}

const amir = new Person("Amir");

//Inheritance

class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
    this.score = score;
  }

  getScore() {
    console.log(`${this.name} score is ${this.score} in age of ${this.age} `);
  }
}
```
