## DATA TYPES

### primitive 

Primitive types are:

  - BigInt 10000n ( read BigInt Topic )
  - Boolean  true, false
  - Null Emptiness / no-value
  - Number 1,2.12,-43  ( upto 2^53 - 1, Underscore can be applied for readability ), Nan , +/-Infinity, 
  - Undefined Initialized but not assigned
  - String     "" , '' , `` ( String interpolation )
  - Symbol


#### Why BigInt ? and how to create.

- The normal JavaScript Number type can safely represent integers only up to 2^53 - 1 (about 9 quadrillion).
- If you go beyond that, precision is lost because Numbers are stored as floating-point.
- BigInt lets you work with arbitrarily large integers without losing precision.

```js
 // Appened n.
 const big = 123456789012345678901234567890n;
 
 // Use BigInt() function
 const big2 = BigInt("123456789012345678901234567890")

```

### Non-Primitive

  - Object  { name:"amir", lastName:"samimi"}:
    - Object 
    - Array 
    - Function 
    - Date
    - RegExp
    - Map, Set, WeakMap, WeakSet
    

### GET Types

  - typeof


### JS 

  - why null is Object? It's a Bug. null ➝ binary 00000000 ➝ tagged as object ➝ typeof null === "object"
  - why function is an Object? 
  
  ```js
  typeof foo; // function ( but its an object )
  foo instanceof Object; // true
  ```

  ```bash
  Function object:
  - type: object
  - properties: name, length, prototype, custom...
  - internal method: [[Call]]
  - optional: [[Construct]] (if used with `new`)
  ```


