## MUST READ

#### Variables

- Clouser & Env chaining
- Lookup Mechanism
- Declrative Env.

#### Data Types

- Symbol.toPrimitive
- Symbol.Prototype.toPrimitive
- Symbol()

```js
const mySymbol = Symbol("Amir");
let obj = {
  [mySymbol]: "This is a test symbol.",
  [Symbol.toPrimitive](hint) {
    if (hint === "string") return "I'm a string!";
    if (hint === "number") return 42;
    return "default primitive";
  },
};
console.log(obj[mySymbol]); // Outpu: This is a test symbol.
console.log(String(obj)); // Output: I'm a string!
console.log(+obj); // Output: 42
console.log(obj + ""); // Output: default primitive
```

## garbage Collection:

- anything unreachable ( if it can be used ) is a garbage.
- the process of Javascript which free up memory from garbages called GC Effect.
- Memory Leak

  ```js
  let user = {
    name: "Ali",
  };

  user = null; // garbage
  ```

## hanging commas

## The art of programming

## Persistant Storage - Reference Copy while array copying - Algorithms

## Tuples / Records

## Parallel Run with Map Reduce Filter

## this

## you dont know js F

- length
- PrototypeF

## TOP LEVEL AWAIT

## evaluation ( evaluate )

---

## TS

- polymorphism and sub-polymorphism
- Reacord & Tuple
- Mapped Types
- zod.dev


## BACKEND

- app.use(express.urlEncoded({extended:true}))
- **helm** middleware / metric / etc...
- vcs: Pijul
- vcs: git fetch <remote> <branch>