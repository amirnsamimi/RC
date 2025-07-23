## Advance Typescript

```ts
// Omit / Pick

type PendingOrder = {
  status: "cooking";
  food: string;
  count: number;
};

type orderBase = Pick<PendingOrder, "count" | "food">;

type Cooking = Omit<PendingOrder, "status"> & {
  status: "cooking";
  estimatedTime: Date;
};

type onTheWay = Omit<Cooking, "status"> & {
  status: "OnTheWay";
  deliverer: {
    name: stirng;
    mobile: number;
  };
};

type Delivered = Omit<onTheWay, "status"> & {
  status: "Delivered";
  rate: 1 | 2 | 3 | 4 | 5;
};

type foodOrder = PendingOrder | Cooking | onTheWay | Delivered;

// Exclude & Extract
// Conditional Type

type digit = 1 | 2 | 3 | 4 | 5 | 6;
type filteredDigit = Exclude<digit, 1 | 2>; // 3,4,5,6
type extractedDigit = Extract<Digit, 1 | 2>; // 1,2

// Partial & Required - required remove optionals

interface Person2 {
  firstName: string;
  lastName: string;
}

const partialPerson = Partial<Person2>; // make every key optional


// Record

type Person1 = "amin" |  "hadi" | "amir";
type Foods1 = "Pizza" | "Kabab" | "Ghorme";

const personFoods = Record<Person1, Array<Foods1>>{
    "amin" : ["Pizza"],
    "amir" : ["Kabab", "Pizza"],
    "hadi" : ["Ghorme"]
}

// typeof

const student = {
    firstName: "amir",
    lastName: "Samimi",
    age: 30
}

type Student = typeof student //infering types

// Returntype & Parameters

const add = (x:number,y:number):number => x +y

type addFnType = ReturnType<typeof add>
type addFnParameters = Parameters<typeof add>

// nonEmptyArray

type nonEmptyArrayType<A> = nonEmptyArray[A,...A[]]

const arr:nonEmptyArrayType<number> = [] // must have one element at least, [A,A,...A[]] at least 2 element

// as Const
// we are not sure x is number
const x: number = 10

// we use type gaurd / definement and narrow types
// instead of type Dice = 1 | 2 | 3| 4 | 5 | 6

const dices = [1,2,3,4,5,6,7,8] as const // make it readonly
type Dice = typeof dices[number] // make a type unified from dices
const isDic = (a:number): x is Dice =>  x === 1 || x === 2 // this is type gaurd use with x is Dice ( is )
if(isDice(x)){
    x // type is dice
}

x // type is number


// Key of

const dict = {
    hello:"hello",
    goodbye:"goodbye"
}

type dictKeys = keyof typeof dict

// Type Casting

const y = "Amir" as number // error. how to force solve =>
const y = "Amir"  as unknown as number
//or
const y: unknown = "Amir"
const x = y as number

// interface vs type
// interface is extendable with extend
// type can be extendable with &
// type can be seen when hover on that type else where used
// interface shows ex: =>  interface user
// interface can be defined multiply and then will be merged interface with the same name for enhancement

// template literals

type CssAttr = "margin" | "padding"
type Direction = "bottom" | "top" | "left" | "right"

type Css = `${CssAttr}-${Direction}` // "margin-bottom" | "margin-top" | ...
const element: Partial<Record<Css, `${number}%`>> = {
    "margin-bottom": "10%"
}

//uppercase

type d = UpperCase<Direction>
type c = Capitalize<Direction>

// Conditional types ???
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example1 = number

type Example2 = RegExp extends Animal ? number : string;

type Example2 = string


```

- a complete language is twin complete
