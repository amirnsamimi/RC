import http from "http";
import { parse } from "url";

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  const url = parse(req.url || "", true);

  if (url.pathname === "/hello" && req.method === "GET") {
    res.appendHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Hello " + url.query.name || "" }));
    return;
  }
  
  if (url.pathname?.startsWith("/hello") && req.method === "GET") {
    const param = url.pathname.split("/")[2];
    res.appendHeader("Content-Type", "application/json");
    res.end(JSON.stringify(param));
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
