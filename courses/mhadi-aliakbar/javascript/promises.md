## Promises Microtasks

```js
const promise = new Promise((resolve, reject) => {
  resolve("amir");
});

// solution for call back hell
// pending, resolved, rejected
console.log(promise);

const sleep = (second) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), second * 1000);
  });

const sleep = (second) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), second * 1000);
  });

console.log("before sleep");
sleep(1)
  .then(() => {
    console.log("after sleep 1");
    return sleep(2);
  })
  .then(() => {
    console.log("after sleep 2");
    return sleep(2);
  })
  .then(() => console.log("after sleep3"));

// promise resolve

const numPromise = Promise.resolve(1);
numPromise.then((num) => console.log(num)); // 1

// promise reject

const numReject = Promise.reject("oh no");
numReject.then((x) => console.log(x)).then((err) => console.log(err));

// finally ( always close file in nodejs )

numReject
  .then((x) => console.log(x))
  .then((err) => console.log(err))
  .finally(() => console.log("done"));
```

## microtask creator

```js
queueMicroTask(() => console.log("hello"));
```

## Execution Context, Memory, Thread of execution, microtask, microtask and event loop

```js
const myName = "Amir";
function clouser() {
  let score = 0;
  function increment() {
    score++;
  }

  return increment;
}

const promise = new Promise((resolve, reject) => {
  resolve();
  return 25;
})
  .then((x) => console.log(x))
  .finally(() => console.log("Done"));

setTimeout(() => console.log("hello"), 0);

const findScore = clouser();
findScore();

console.lo("This Goes First");
```
