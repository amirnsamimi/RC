## Primitive Types

## any, void, unknown, never

```ts
let isAny: any = () => console.log("hello"); // any types you like can be initialized
```

- type narrowing and unknown

```ts
let isUnknown: unknown = "Amir"; // unknown can be anything but we dont know like something comes from network
//for solving unknown we have to narrow type
if (typeof isUnknown === string) {
  x; // here x is string ( by checking typeof we clear unknown )
}
```

- void

```ts
let voidFunc = (): void => console.log("from void func"); // any function withou return
```

- never

```ts
let neverFunc = (): never => {
  throw new Error("never Func");
  // while(true)   infinite loop that never have return
}; 
```
