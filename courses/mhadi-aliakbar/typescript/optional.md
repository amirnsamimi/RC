## Optional

- if we use ? and the input was null JS coersion it to undefined.

```ts
interface Person {
  firstName?: string; // means if you don't use its undefined
  lastName: string;
  getAge?: () => number;
  food?: string[];
}

const person: Person = {
  lastName: "Samimi",
  getAge: () => 10,
};

const firstName = person.firstName?.toUpperCase(); // ? : optional
const age = person.getAge?.();
const favFood = person.food?.[0];

// won't raise error without noUncheckedIndexedAccess

const arr: number[] = [];
const array = arr[0];
console.log(array); // gives undefined default without noUncheckedIndexedAccess so:

let sum = 0;
for (let i = 0; i < food.length; i++) {
  sum += arr[i]; // possibly undefined  arr[i]!  or use reduce instead
}
```

```json
//tsconfig

{
  "compilerOptions": {
    "target": "es2020",
    "noImplicityAny": true,
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

## Surely exist

```ts
const firstName = person.firstName!.toUpperCase(); // means I'm sure firstname !== undefined
```

## example

```ts
//instead of this

interface FoodOrder {
  status: "pending" | "cooking" | "onTheWay" | "Delivered";
  food: string;
  count: string;
  estimatedTime?: Date;
  deliverer?: {
    name: string;
    mobile: string;
  };
  rate?: 1 | 2 | 3 | 4 | 5;
}

// use
type PendingOrder = {
  status: "cooking";
  estimatedTime: Date;
  foot: string;
  count: number;
};

type Cooking = {
  status: "cooking";
  estimatedTime: Date;
  foot: string;
  count: number;
};

type onTheWay = {
  status: "onTheWay";
  estimatedTime: Date;
  foot: string;
  count: number;
  deliverer: {
    name: stirng;
    mobile: number;
  };
};

type Delivered = {
  status: "Delivered";
  estimatedTime: Date;
  foot: string;
  count: number;
  deliverer: {
    name: stirng;
    mobile: number;
  };
  rate: 1 | 2 | 3 | 4 | 5;
};

type foodOrder = PendingOrder | Cooking | onTheWay | Delivered;
```
