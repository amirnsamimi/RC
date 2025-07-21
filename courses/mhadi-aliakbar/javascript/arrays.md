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

const arrCopy = [...arr]

```

