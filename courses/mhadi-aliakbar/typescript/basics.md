## type inference, types and

```js
let name = "Amir";
let age = 10;
let bigInt = 10n;
let isTrue = false;
```

```ts
let name: string = "Amir";
let age: number = 10;
let bigInt: bigint = 10n;
let isTrue: boolean = false;
let isUndef: undefined = undefined;
let isNull: null = null;
```

```json
//tsconfig
{
  "complierOptins": {
    "target": "es2020" // can use bigint
  }
}
```

- type inference means auto type set to the variable so then you cannot change it to another type.

```ts
const person = {
  firstName: "Amir",
  lastName: "Samimi",
  age: 35,
};

function add(x: number, y: number): number {
  return x + y;
} // output number infer auto ( can be empty )

const add: (x: number, y: number) => number = (x, y) => {
  return x + y;
}; // not so popular
```

```json
//tsconfig
{
  "complierOptins": {
    "target": "es2020",
    "noImplicityAny": true // no one can have any as type
  }
}
```

## type aliases

```ts
type TADDFN = (x: number, y: number) => number;
const add: TADDFN = () => {
  return x + y;
};

type TPERSON = {
  firstName: string;
  lastName: string;
  age: number;
};

interface IPERSON {
  firstName: string;
  lastName: string;
  age: number;
}

const person: IPERSON = {
  firstName: "Amir",
  lastName: "Samimi",
  age: 35,
};
```
