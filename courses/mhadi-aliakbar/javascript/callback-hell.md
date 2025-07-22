## Callback Hell / Christmas Tree

```html
<div id="app"></div>
```

```js
const app = document.getElementById("app");
const form = document.createElement("form");
const input = document.createElement("input");
input.placeholder = "please enter your firstname";
input.style.width = "80%";

const submit = document.createElement("button");
submit.type = "submit";
submit.innerText = "Submit";

form.append(input);
form.append(submit);
app.append(form);

const thinking = document.createElement("h1");
thinking.innerText = "Thinking ...";
thinking.style.display = "none";
app.append(thinking);

//issue
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("in first Event listener");
  const firstName = input.value;
  form.style.display = "none";
  thinking.style.display = "block";
  setTimeout(() => {
    thinking.style.display = "none";
    form.style.display = "block";
    form.addEventListener();
    form.addEventListener("submit", (e) =>
      console.log("in second event listener")
    );
  }, 1000);
});

// create functions
// Comment ISSUE to use
// callback hell / christmas tree

const thinking = (seconds, fn) => {
  thinking.style.display = "block";

  setTimeout(() => {
    thinking.style.display = "none";
  }, seconds * 1000);
};

const ask = (title, fn) => {
  input.placeholder = title;
  form.style.display = "block";

  const handler = (event) => {
    event.preventDefault();
    const value = input.value;
    input.value = "";
    form.removeListener("submit", handler);
  };

  form.addEventListener("submit", handler);
  form.style.display = "none";
  fn(value);
};

ask("plesae enter your firstName", (firstName) => {
  console.log("firstName", firstName);
  thinking(1, () => {
    ask("please enter LastName", (lastName) => {
      thinking(2, () => {
        ask("please enter age", (age) => {
            console.log(`${firstName}, ${lastName}, ${age} `)
      });
    });
  });
});
```
