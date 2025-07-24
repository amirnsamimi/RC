## EXPRESS

1. pnpm add expresss
2. import express from "express"

## LISTENING ON PORT 3000 WITH EXPRESS

```ts
import express from "express";

const app = express();

app.listen("3000", () => {
  console.log("Server is listening");
});
```

## GET ( Query Params & Parameters)

- content-type in response will handle automatically by express but can be changed by - res.type('json') or res.set('Content-Type':'application/json' )

```ts
app.get("/hello", (req, res) => {
  const name = req.query.name;
  res.send({ name: "hello World from Amir!" + name });
});

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send({ name: name });
});
```

## POST

- using middleware ( order is important )
- app use

  approach 1:

```ts
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next(); //goes to next middleware ( if not exist continue )
});

app.post("/hello", (req, res) => {
  const name = req.body.name;
  res.send({ name: name });
});
```

approach 2:

```ts
app.use(express.json()); // make bodies parsed json if content type is json

app.post(
  "/hello",
  (req, res, next) => {
    console.log(req.query);
    next();
  },
  (req, res) => {
    const name = req.body.name;
    res.send({ name: name });
  }
);
```
