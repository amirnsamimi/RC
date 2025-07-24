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


