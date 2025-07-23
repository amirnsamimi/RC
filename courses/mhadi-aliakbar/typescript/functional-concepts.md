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

## HOC

## Currying

## Currine

## Pipe operator

```

```
