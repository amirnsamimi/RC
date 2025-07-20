## Conditions

- statement defenition
  statements control a block.

```js
// statement
if (condition) {
} else if (condition) {
} else {
}
```

- statement example:

```js
const age = 21;
let message;
if (age < 18) {
  message = "age is under 18";
} else {
  message = "age in accepted";
}

alert(message);
```

- Expression defenition:
  expressions always return a value

```js
// Ternary Operator
const message = condition ? true : false;
```

- expression example:

```js
const age = 21;
const message = age < 18 ? "age is under 18" : "age is accepted";
alert(message);
```

## Falsely

- "" false
- undefined false
- null false
- 0 false
- NaN false

- {} true
- "a" true
- 1 true

## undefined/null check

```js
const value = undefined;
if (value !== undefined) {
  console.log("Its Defined");
} else {
  console.log("Still undefined");
}
```

# Switch

- switch example:

```js
const product = "Milk";
switch (age) {
  case "Milk":
    console.log("costs: 2.99 euros");
    break;
  case "Oil":
    console.log("costs: 3.79 euros");
    break;
  default:
    console.log("the product is unavailable or your basket is empty");
    break;
}
```

## Nullish coalescing operator

```js
const a = null ?? "Hello from Amir!" // Hello from Amir!
const b = undefined ?? 254 // 254
null || undefined ?? "foo"; // raises a SyntaxError
true && undefined ?? "foo"; // raises a SyntaxError
(null || undefined) ?? "foo"; // returns "foo"
```

## Nullish coalescing assignment (??=)

```js
const a = { duration: 50 };

a.speed ??= 25;
console.log(a.speed);
// Expected output: 25

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50
```

## Optional Chaining ( ?. )

```js 
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```