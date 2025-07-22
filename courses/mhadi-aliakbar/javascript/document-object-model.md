## Document Object Model

- local storage
- session storage
- cookies
- document object models
- events

```html
<body>
  <h1>DOM testing</h1>
  <div id="app" class="application">
    <form>
      <input placeholder="enter your data" />
      <button type="submit">Submit</button>
    </form>
  </div>
</body>
```

```js
document.getElementById("app"); // HTMLDivElement { ... }
document.getElementsByClassName("application"); // Array of Elements
document.querySelector("#app");
// and more...
```

```js
const div = document.querySelector("#app");
const h1 = document.createElement("h1");
h1.innerText = "DOM Lesson";
div.append(h1);

const form = document.createElement("form");
const input = document.createElement("input");
const submit = document.createElement("button");
submit.type = "submit";
submit.innerText = "submit";
form.append(input);
form.append(submit);
div.append(form);

const handler = (e) => {
  e.preventDefault();
  console.log(input.value); // or e.target.value
  form.removeHanlder("submit", hanlder); // for removing
};

form.addEventListener("submit", handler);

submit.addEventListener("mousemove", (e) => {
  e.stopPropagation(); // if below is listening dont do this
  console.log("Submit move", e.clientX, e.clientY);
});

document.body.addEventListener("mousemove", (e) => {
  console.log("body Mouse", e.clientX, e.clientY);
});
```
