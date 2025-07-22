## ASYNC / AWAIT

```js
const getData = async () => {
  const a = await func();
  const b = await func2();
  const c = await func3();

  return { a, b, c };
};

getData().then((x)=>console.log(x))
```
