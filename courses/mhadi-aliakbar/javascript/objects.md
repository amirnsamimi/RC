## Objects

- Non-Primitive Types
- Key / Value Pairs

## Defining Objects

```js
const testKey = "type";
const person = {
  age: 30,
  gender: "Male",
  firstName: "Amir",
  "last name": "Samimi",
  [testKey]: "Test",
};
```

## Get / Add new Key

```js
console.log(person.age); // 30
console.log(person["last name"]);
person.phoneNumber = "0912****667";
```

## Dynamic Key

```js
const key = prompt("insert your key");
console.log(person[key]);
```

## Iteration in Objects

```js
for (let key in person) {
  console.log(key);
}
```

## Using type Number ( int ) as key

- will cause sorting by numbers ASC
- will change to string

## Deleting Operator

```js
delete person.firstName; // Do not use
```

## Check if key is in object

```js
if (age in person) {
  // true
  console.log(person.age);
}
```

## Copying Objects

```js
const point1 = {
  x: 0,
  y: 0,
};
```

1. using direct copy

```js

const point2 = {
    x: point1.x
    y: point2.y
}

```

2. use Object.assign({}, otherObject ) ( Only Copy first layer, not applicable for nested objects )

```js
const point2 = Object.assign({}, point1);
```

3. Spread Operator ( Only Copy first layer, not applicable for nested objects )

```js
const point3 = {
  from: { x: 0, y: 0 },
  to: { x: 10, y: 10 },
};

point3.from.x++;

const point2 = { ...point3 }; // Only Copy first layer, not applicable for nested objects
console.log(point2.from.x) // 1 ( copies the reference of point3 as well so the value is the same with point3 )

```

4. StructuredClone(obj)

```js
const point3 = {
  from: { x: 0, y: 0 },
  to: { x: 10, y: 10 },
};

point3.from.x++;

const point2 = structuredClone(point3); // copy successfuly all layers !!!!!!important => cannot use when a method ( function ) in inside object 
console.log(point2.from.x) // 0 
```

