## Array

```js
const arr = [1, 2, 3, 4, 5];
const arr = new Array(1, 2, 3, 4, 5);
```

## Indexing

```js
console.log(arr[0]); // 1
console.log(arr.at(-1)); //5
```

## Methods

```js
arr.length;
arr.push(item);
arr.pop();
arr.unshift();
arr.shift();
```

## Iteration

```js
for (const x of arr) {
  console.log(x); // 1,2,3,4,5 return value
}

for (const i in arr) {
  console.log(i); // 0,1,2,3,4 return index
}
```

## Comparing

- using iteration

```js

cosnt arr = [1,2]
const arr2 = [1,2]

let flag = true;
for(let i = 0 ; i < Math.max(arr.length,arr2.length); i++ ){
    if(arr[i] !== arr2[i]){
        flag = false
        break;
    }
}
```

## COPYING

```js
const arrCopy = [...arr];
```

## Methods

- main Array

```js
const arr = [1, 2, 3, 4, 5, 6];
```

- delete

```js
delete arr[0];
console.log(arr); // [2,3,4,5,6]
```

- splice

```js
const arr2 = arr.splice(0, 2);
console.log(arr); // [3,4,5,6]
```

- slice \* ( copy to new array )

```js
const arr2 = arr.slice(0, 2);
const arr3 = arr.slice(0, -2);
console.log(arr2); // [1,2]
console.log(arr3); // [1,2,3,4]
```

- includes & indexOf & lastIndexOf ( may cause problem )

```js
console.log(arr.includes(1)); // true
console.log(arr.indexOf(2)); // 1
console.log(arr.lastIndexOf(2)); // 1
```

- find \* & findIndex

```js
const founded = arr.find((item) => item === 2);
console.log(founded); // 2

const foundedIndex = arr.findIndex((item) => item === 3);
console.log(foundedIndex); // 2
```

- split \* & join

```js
const name = "amir;samimi;";
const splitedName = name.split(";");
const joinedName = splitedName.join(",");
```

- sort

```js
const newArr = [5, 2, 123, -1];
const sortedArr = newArr.slice().sort((a, b) => b - a); // [...newArr].sort((a,b)=> b - a)
```

- map \*

```js
const newMappedArr = arr.map((item) => item + 1);
console.log(newMappedArr); // [2,3,4,5,6,7]
```

- flat ( if you want to increase length use flatmap )

```js
const newMappedArr = arr.map((item) => [item + 1, item]);
console.log(newMappedArr); // [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
console.log(newMappedArr.flat()); // [1,2,2,3,3,4,4,5,5,6,6,7]
```

- flatMap \*

```js
const newMappedArr = arr.flatMap((item) => [item + 1, item]);
console.log(newMappedArr); // [1,2,2,3,3,4,4,5,5,6,6,7]
```

- filter \*

```js
const filteredArr = arr.filter((item) => item % 2 === 0);
console.log(newMappedArr); // [2,4,6]
```

- reduce \*\*

```js
const nums = [1, 2, 3, 4];

const reduce = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(reduce); // 10

// Flattening Arrays
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, val) => acc.concat(val), []);
// flat = [1, 2, 3, 4, 5]

// Counting Frequency
const votes = ["yes", "no", "yes", "yes", "no"];
const tally = votes.reduce((acc, vote) => {
  acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});
// tally = { yes: 3, no: 2 }

// Building Objects from Array
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const userMap = users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});
// userMap = { 1: "Alice", 2: "Bob" }

//Promise Chaining
const funcs = [f1, f2, f3];

funcs.reduce((promise, fn) => {
  return promise.then(fn);
}, Promise.resolve());

// Reversing or Transforming Strings
const str = "hello";
const reversed = str.split("").reduce((rev, char) => char + rev, "");
// reversed = "olleh"

// Finding Avg, Min, Max
const nums = [10, 20, 30];
const avg = nums.reduce((acc, val, _, arr) => acc + val / arr.length, 0);
// avg = 20
```

- some \*

```js
const isValid = arr.some((x) => x > 2);
console.log(isValid); //true
```

- every

```js
const isValid = arr.every((x) => x > 2);
console.log(isValid); // false

const isValid2 = [].every((x) => x > 2);
console.log(isValid2); // true
```

- fill

```js
const newArr = Array(10).fill(null); // [null,null,null,null,null,null,null,null,null,null]
```

- isArray

```js
console.log(arr.isArray()); //true
```

- concat

```js
const arr2 = [2,3,4]
const newArr = [...arr2,...arr]
const newArrWConcat = arr2.concat(arr)
```

- range 

```js 

const range = (end,start) => {
const positivity = end - start >= 0 ? true : false
const len = positivity ? end - start : start - end
const arr = Array(len).fill(0).map((_,i)=>  positivity ? i + start : -(i - start))
return arr
}


```