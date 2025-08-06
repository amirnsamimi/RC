import { app } from "./api";

// Server Port Opening
app.listen(process.env.LISTENING_PORT, () => {
  console.log("server running on port", process.env.LISTENING_PORT);
});
