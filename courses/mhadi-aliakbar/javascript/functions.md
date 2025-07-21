## Functions

- First Class Citizen in JS

- Functions can be treated like any other value.
- This is a core concept in functional programming and what makes JavaScript so flexible.
- A first-class citizen (or "first-class object/value") in a language can:
  - Be assigned to a variable
  - Be passed as an argument to another function
  - Be returned from a function
  - Be stored in a data structure (like an array or object)

## Defining Function

```js

function myFunc(){
  console.log("hello from function")
}

const function = myFunction(){
  console.log("hello from function")

}

const function = function myFunc(){
   console.log("hello from function")
}

const function = () => {
  console.log("hello from function")
}

const function = async () => {
    console.log("hello from function")
}

const function = async myFunc(){
      console.log("hello from function")

}

```

## HOISTING

The Process that JavaScript

| Type            | Hoisted | Initialized                   | Can Use Before Declaration    |
| --------------- | ------- | ----------------------------- | ----------------------------- |
| `var`           | Yes     | ✅ Initialized to `undefined` | ✅ (but value is `undefined`) |
| `let` / `const` | Yes     | ❌ Not initialized            | ❌ ReferenceError (TDZ)       |
| `function`      | depends | depends                       | depends                       |
| `class`         | Yes     | ❌ Not initialized            | ❌ ReferenceError (TDZ)       |

| Type           | Hoisted | this Bound | Can Use `new` | `arguments` | Syntax      |
| -------------- | ------- | ---------- | ------------- | ----------- | ----------- |
| Function Decl  | ✅ Yes  | Dynamic    | ✅ Yes        | ✅ Yes      | `function`  |
| Function Expr  | ❌ No   | Dynamic    | ✅ Yes        | ✅ Yes      | `function`  |
| Arrow Function | ❌ No   | ❌ Lexical | ❌ No         | ❌ No       | `=>`        |
| Generator      | ✅/❌   | Dynamic    | ✅ Yes        | ✅ Yes      | `function*` |
| Async Function | ✅/❌   | Dynamic    | ✅ Yes        | ✅ Yes      | `async`     |
| Class Method   | ❌ No   | Dynamic    | N/A           | ✅ Yes      | Shorthand   |

## different Functions

1. function declaration: ( use case: General purpose, reusable functions, easier to debug in dev tools )

- fully hoisted
- dynamic this keyword
- can use new keyword - become a constructor
- arguments available
- no default strict mode
- named function - required

```js
function hello(name) {
  console.log(this.name, name); // ['samimi','amir']
}

const obj = {
  name: "samimi",
  hello,
};

obj.hello("amir");
```

2. function expression: ( use case: inline, one-time or scoped function )

- TDZ if used with const/let ( var is hoisted )
- dynamic this keyword
- can use new keyword
- arguments available
- no default strict mode
- named function - required
- can be named or anonymous

```js
// anonymous
const sayHi = function (name) {
  console.log(`hello ${name}`);
};

sayHi("Amir"); // hello Amir

// named
const sayHi2 = function sayHello(name) {
  console.log(`hello ${name}`);
};

sayHi2("Amir"); // hello Amir
sayHello("Amir"); // Reference Error
```

3. Arrow Functions: ( use case: Short, context-aware callbacks )

- TDZ
- this binding is available in lexical scope 
- Compact Syntax 
- cannot use new - type error
- no argument object - using rest parameters ( DOES NOT HAVE THE ARGUMENT OBJECT INSIDE NORMAL OBJECTS TO BE LIGHT WEIGHT )

```js

  function myClouser(){ // Construction Function
    this.name = "Amir"
    const arrowFunc = () => {
      return this.name
    }
    return arrowFunc
  }

const newClouser = new myClouser()
console.log(newClouser() ) /'Amir'

```

4. Generator Function ( use case: Lazy iteration, generators, state machines )

- Hoisting ( depends on)
- this Binding is Dynamic 
- cannot use new


working with a generator function, denoted by function*, which allows you to pause and resume execution using the yield keyword.
This function doesn't return values directly. Instead, it returns an iterator that you can pull values from one at a time.

```js

function* gen() {
  yield 1;
  yield 2;
}

//usage
const genObj = gen()

// next method gives each value at each time in an itterative mode with a pause
console.log(genObj.next()) // {value:1, done:false}
console.log(genObj.next()) // {value:2, done:false}
console.log(genObj.next()) // {value: undefined, done: true} 

// lopp through 
for (const value of gen()) {
  console.log(value); // gives 1,2
}

// can spread or create array 
console.log([...gen()]);        // [1, 2]
console.log(Array.from(gen())); // [1, 2]

// return force generator to stop and return done:true

console.log(genObj.return(20)) // {value:20,done:true} stops here

// throw do the same without creating a new object by throwing error.
// uncomment snippet below and comment others to test
// function* gen() {
//   try {
//     yield 1;
//     yield 2;
//   } catch (e) {
//     console.log("Caught:", e);
//   }
// }

// console.log(genObj.throw("force stop")) // caught: force stop

```

5. async/await function 

- hosting if declared normally 
- this is dynamic binded 
- can use new 
- argument object available
- returns promise
- async workflow in browser API ( Network Communication ) TCP/IP stack → sockets → DNS → HTTP request
- this is a browser API which is a MicroTask ( has a job ) and comes in stack after Event Loop

```js 
async function fetchData() {
  const res = await fetch("...");
  return res;
}
```

6. classes 

- Learn more in classes.md ( OOP )

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const p = new Person("Ali");
p.greet(); // "Hello, I'm Ali"

```

## functions as Parameters

```js 

const sayHello = (name,action ){
  action(`hello ${name}`)
}

sayHello("Amir",console.log)
```

## IMPORTANT NOTES

- Functions MUST be Maintainable & Readable
- Functions MUST be small snippets & single functioning
- Con Sized Functions are the best
