import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  if (req.url === "/hello" && req.method === "GET") {
    res.appendHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ name: "amir" }));
    return;
  }

  if (req.url === "/hello" && req.method === "POST") {
    req.on("data", (data) => {
      const userData = data.toString();
      const userJSON = JSON.parse(userData);
      res.appendHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ name: userJSON.name }));
    });

    return;
  }
  res.end("hello world");
});

server.listen(3000, () => console.log("serverrunning"));
