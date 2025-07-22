## EVENT LOOP

- JS is a single Thread.
- Each Function runs in execution context
- primitive data saved in memory
- events like timeout, event handlers, interval, async/await ... runs in browser event loop and depending in microtasks

```js
const cancleButton = document.queryselector("#cancelButton");

const sayGoodBye = () => console.log(goodbye);

//timeout

const timeout = setTimout(sayGoodBye, 1000);

cancleButton.addEventListener("click", () => {
  clearTimout(timeout);
});

//interval

const interval = setInterval(sayGoodBye, 2000);
cancleButton.addEventListener("click", () => {
  clearInterval(interval);
});

//nested

const areYouThere = () => {
  console.log("are you there?");
  setTimeOut(areYouThere, 3000);
};

areYouThere();
```
## NOTES

- event loop queue will run after all cpu insentive codes has been run.
- setTimeout , ... are macrotasks 
- microtask queue are same as eventloops