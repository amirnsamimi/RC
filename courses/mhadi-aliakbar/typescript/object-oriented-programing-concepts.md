## Abstract Class, Private, Protected, Abstract, implementing interfaces with implements, extending interfaces

```js
class Animal {
  constructor() {
    throw new Error("abstract class cannot be initialized directly");
  }

  speak() {
    throw new Error("Method 'speak()' must be implemented.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Rex");
d.speak(); // Rex barks.

const a = new Animal("Generic"); // ❌ Error: Abstract classes can't be instantiated.
```

- in ts
- interfaces will be removed in runtime

```ts
interface Show {
  show(): string;
}

interface hasName {
  name: string;
}
abstract class Animal {
  abstract speak(): string; // must be available in extentions
  protected run(): string; // can be used in extends but not in instantiations
  private walk(): string; // only available in main class not in inheritences
}

class Dog extends Animal implements Show, hasName {
  constructor(private name: string) {
    super();
  }

  speak(): string {
    return this.name + "barked!";
  }

  show() {
    return "I have show";
  }
}

const dog = new Dog("Rex");
dog.speak();

dog instanceof show; // wrong  ( because interface will be removed )
dog instanceof Animal; // true and correct

// for comparing
interface Equal {
  Equal(a: Equal, b: Equal): boolean;
}

interface Ord extends Equal {
  compare(a: Ord, b: Ord): number;
}

//structural types are the same from typescript side

interface Person {
  firstName: string;
  lastName: string;
}

class User {
  private _ = Symbol();
  constructor(public firstName: string, public lastName: string) {}
}

class Student {
  private _ = Symbol();
  constructor(public firstName: string, public lastName: string) {}
}

// considering nominal types they are different
// for making those classes nominal types we use Symbol()
```
