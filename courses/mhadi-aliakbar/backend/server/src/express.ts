import express from "express";

const app = express();
app.use(express.json())

app.use((_, res) => {
  res.status(404).send({ mesage: "not-found" }); 
});

app.get("", (req, res) => {
  res.send("hello from root");
});

app.get("/hello", (req, res) => {
  const name = req.query.name;
  res.send({ name: "hello World from Amir!" + ( name || "") });
});

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send({ name: name });
});

app.post("/hello", (req, res) => {
  const name = req.body.name;
  res.send({ name: name });
});



app.listen("3000", () => {
  console.log("Server is listening");
});
