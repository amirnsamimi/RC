## ADT

## SUM TYPE, PRODUCT TYPE & EXPONENTIAL TYPES

## Literal Types

```ts
let y = "ali"; // y is string
const x = "amir"; // literally x type is Amir ( always )
```

## SUM Types

```ts
type Dice = 1 | 2 | 3 | 4 | 5 | 6; // Union Type
const dice: Dice = 6;

let x: number | string = 10;
x = "10";
```

## PRODUCT Type

```ts
type Dice = 1 | 2 | 3 | 4 | 5 | 6; // Union Type
type Coin = "Head" | "Tail";

type CoinDiceGame = {
  dice: Dice;
  coin: Coin;
};
```

## TUPLES

- arrays are heterogeneous so tuple solve dangerously add values heterogeneous or you can infer types to solve

```ts
const arr = ["Amir", 1, true]; // heterogeneous ( don't use this )
const arr: string[] = ["amir", "hadi"];

type Tuple = [Dice, Coin];
const tuple: Tuple = [1, "Head"];
```

## discriminated Union

- exhusting pattern matching

```ts
type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Rect = {
  type: "Rect";
  width: Digit;
  height: Digit;
};

type Circle = {
  type: "Circle";
  radius: Digit;
};
type Square = {
  type: "Square";
  edge: Digit;
};

type Shape = Rect | Circle | Square;

const area = (shape: Shape): number => {
  swtich(shape.type){
    case 'Rect':
        return shape.height * shape.width
    case 'Circle':
        return Math.PI * shape.radius ** 2
    case 'Square':
        return shape.edge **2



};
square // type is never because we implement all possibilities, if we don't check all possible incomes and we don't see an error from type script we have to set 'strict': true in tsconfig
};
```

```json
//tsconfig

{
  "compilerOptions": {
    "target": "es2020",
    "noImplicityAny": true,
    "strict": true
  }
}
```

## Intersection Type

- be like type a + type b = type ab

```ts
type Person = {
  firstName: string;
  lastName: string;
};

type Lesson = {
  score: number;
};

type Student = Person & Lesson;
```

## Exponential Type

```ts
type FirstName = "Hadi" | "Naser";

type Food = "Pizza" | "Burger" | "Kebab";

type FirstNameFood = (name: Food) => FirstName;
```

## Wrap up

- use descriminated unions
- use unions with literal types
