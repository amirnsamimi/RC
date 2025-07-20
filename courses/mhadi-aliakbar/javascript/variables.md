## let

```js
let age = 4
age = 12
```

- let can be re-assign after definition ( mutable )
- multiple inline declration can be applied.

```js

let x = 2, y=1;
const a = 1,
      b = 2,
      c = 3;

```


## const 

```js 
const age = 4 
age = 4 // throw error: Assignment to constant error
```

- const cannot be re-assigned after definition ( immutable )

## var ( not used anymore due to issues )

- global scope
- can be redeclared w/o error
- is hoisted 



## let / const 

- Are created inside lexical enviroment ( defined / exists )
- Are lexical binded ( initialized when execution context run that line )
- TDZ  ( Temporal dead zone before initializing )
- No hoisting

```js 

{
  // TDZ here — x exists but isn't initialized
  let x = 5; // ✅ Now x gets the value 5
}

```