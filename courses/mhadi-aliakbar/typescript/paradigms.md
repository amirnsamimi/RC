## Paradigms

## Imperative and Declarative Programming

- Programming languages make tools available to solve problems, paradigms are ways we can use tools to solve.
- we have 2 way to solve problems. 1. Imperative , 2.Declarative

1. in imperative we directly clear steps for computer to reach the answer. ( control flow )

```ts
function sum(arr: number[]): number {
  let total: number = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}
```

2. in declarative we only specify the last answer and we dont enter details. SQL is a good exmple for declarative programming ( relational databases )

```ts
function sum(arr:number[]):number {

return arr.reduce((prev, curr) => prev + curr, 0);

```

## OBJECT ORIENTED PROGRAMMING

- it's an imperative programming way that contains classes and objects together.
- the main features: Encapsulation ، Inheritance و Polymorphism

```js
class Person {
  #age; // Private

  constructor(name, age) {
    this.name = name; // Public
    this.#age = age;
  }

  getAge() {
    return this.#age; // encapsulation ( making things accessible with only some methodes and hide the functions )
  }

  setAge(newAge) {
    if (newAge > 0) {
      this.#age = newAge;
    }
  }
}

class Student extends Person {
  // extend shows inheritance
  constructor(name, score) {
    super(name);
    this.score = score;
  }

  get getScore() {
    return this.score;
  }

  speak() {
    return "hi";
  }
}

class Worker extends Person {
  constructor(name, job) {
    super(name);
    this.job = job;
  }

  shout() {
    return "hi";
  }
}

// speak() and shout() are Polymorphism that make inheritences have separate shapes

const p = new Person("Amir", 25);
console.log(p.name); // Amir
console.log(p.getAge()); // 25
p.setAge(30);
console.log(p.getAge()); // 30
```

## Function Programming

- it's a subset of declarative programming.
- it's a mathematical paradigm and born before language programming that have more control on states and data.
- it become popular because functions are first-class.

#### example:

1. Double each number
2. Filter only numbers greater than 10
3. Sum them all

- Why our example is functional programming ?

1. Pure functions: map, filter, reduce don’t change the original array.
2. No side effects: We’re not modifying external state.
3. Immutability: Original data remains unchanged (numbers is untouched).
4. Higher-order functions: Functions like map and filter take other functions as arguments.

```js
const numbers = [2, 5, 8, 12, 20];

// Step 1: Double each number
const doubled = numbers.map((n) => n * 2); // [4, 10, 16, 24, 40]

// Step 2: Filter numbers greater than 10
const filtered = doubled.filter((n) => n > 10); // [16, 24, 40]

// Step 3: Sum the result
const total = filtered.reduce((sum, n) => sum + n, 0); // 80

console.log("Total:", total); // Output: Total: 80
```
