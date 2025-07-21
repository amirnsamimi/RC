## Destructuring

```js
const object = {
  fName: "Amir",
  lName: "Samimi",
  age: 30,
};
```

- Object Keys , values , entries & fromEntries

```js
const key = Object.keys(object);
console.log(key); // ['fName','lName','age']

const values = Object.values(object);
console.log(values); // ['Amir','Samimi',30]

const entries = Object.entries(object);
console.log(entries); // its actually keys and values === [key,value]

const fromEntries = Object.fromEntries(entries);
console.log(fromEntries); // copy object from entries
```

- Short hand & Destructure

```js
const name = "Amir";
const lname = "Samimi";
const age = 30;

// short hand

const person = {
  name,
  lname,
  age,
};

// desctructure

const { name, lname, age } = person;

const arr = [1, 2];

const [first, second] = [1, 2];

// destructuring by default value and custom name 

const { name: fname, lname, age, tel = "01234"} = person // tel is not valid in person so return default value & use fname as custom name
const [, , third =  25] = [1,2] 
// destructuring by rest

const {age, ...person2} = person // for removing age from person and create person2 ****
const [_, ...rest] = [1,2,3] // [2,3]  ...rest must be last element

```
