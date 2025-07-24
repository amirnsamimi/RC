import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  if (req.url === "/hello") {
    res.end("hello from server!");
    return;
  }
  res.end("hello world");
});

server.listen(3000, () => console.log("serverrunning"));
