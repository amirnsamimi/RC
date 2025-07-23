## Functional Concepts !== procedural concept

- use pure functions ( checks side effects not happening , ts helps more )
- immutibility
- explicity
- mutibility => changeable ( problem: in a large codebase you don't know where is changing code. we cover this by copying and making new elements )

```ts

interface Person {
    readonly firstName:string; // for immutibility
    lastName: string
}

const person: Person {
    firstName: "Amir",
    lastName: "Samimi"
}

person.firstName = "Adel" // ts error - to solve =>
const person2:Person = {...person,firstName:"Adel"} // spread and copy

// immutibility
const person: Readonly<Person>{
     firstName: "Amir",
    lastName: "Samimi"
}

const arr: ReadonlyArray<number> = [1,2,3] // methods in suggested list with ReadonlyArr or Readonly wont mutate.

// Tuples & record with #
const drivingLicence = #{
    country: "UK",
    number: 123456789870,
};

```

## Refrential Transparency

- return of a function replace in where you call and you got no change

```ts
const add = (x: number, y: number) => {
  console.log("Side Effect"); // side effect
  return x + y;
};

const multiple = (x: number, y: number) => x * y; // no side effect

const output = add(2, multiple(3, 4)); // here if we change add to add(2,3*4) we have to get the same output, if so then we have a pure function and we are obey the Refrential Transparency concept

const now = new Date(); // this is not a pure function a pure function will return same value when ever we pass the same value as argument

// exception throwing will make a function not pure
// if you function was not pure ** dont connect to db **
// Promise is side effect
// function in map must be pure

// if you want side effect do it in forEach not those return new array (ex)

//haskel said if you have a function that gets multiple parameter , it can be multiple function with with parameter

// Composablity
const add = (x: number) => (y: number) => x + y;

const increment = add(1);
console.log(increment(4)); // 5

//example

const pipe =
  (...fns: Function[]) =>
  (input: any) =>
    fns.reduce((acc, fn) => fn(acc), input);

const process = pipe(double, increment, square);
console.log(process(2)); // 25

const trim = (s: string) => s.trim();
const toLower = (s: string) => s.toLowerCase();
const wrapInDiv = (s: string) => `<div>${s}</div>`;

const cleanInput = pipe(trim, toLower, wrapInDiv);

console.log(cleanInput("  Hello WORLD  "));
//  <div>hello world</div>

// maybe later trim |> toLower |> wrapInDiv in later ES
```

## HOC

```ts
function fn(x: number) {
  return x + 1;
}

function addOne(x: number, fn: Function) {
  return fn(x);
}
```

## Currying

```ts
function add(a) {
  return function (b) {
    return a + b;
  };
}
```


