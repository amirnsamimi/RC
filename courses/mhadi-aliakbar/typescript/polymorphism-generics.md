## Polymophism & Generics

- looks like type level functions type as input, new type or same as output

```ts
const arr: number[] = [];
const arr: Array<number> = [1, 2, 3]; // Array<T> => T is polymorphism
const p: Promise<number> = Promise.resolve(1); // Promise<T> => T is polymorphism

// Why looks like function ?

type ArrayNumber<A> = A[]; // Get A as primitive/non-primitive Type and assign it to an Array => we call it parametric polymorphism

interface Show {
  show: () => string;
}

class Person implements Show {
  constructor(private firstName: string, private lastName: string, public age: number) {}
  show() {
    return "something";
  }
}

const writeDown = <A extends Show>(a: A) => {
  // this is not parametric, this is sub typing
  console.log(a.show());
};

writeDown(new person("Amir", "Samimi"));


const birthday = <A extends { age: number }>{a:A} => {
    a.age++
}

birthday(person)
birthday{{age:10}}
```
