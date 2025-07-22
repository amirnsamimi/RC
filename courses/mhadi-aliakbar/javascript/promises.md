## Promises Microtasks

```js
const promise = new Promise((resolve, reject) => {
  resolve("amir");
});

// pending, resolved, rejected
console.log(promise);

const sleep = (second) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), second * 1000);
  });

sleep(1).then(() => console.log("after sleep"));
console.log("before sleep");
```
