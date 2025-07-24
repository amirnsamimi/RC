## Creating HTTP-SERVER with node.js

1. creating project

- mkdir < backend > ( backend is a placeholder change as you wish )
- pnpm init ( you can choose npm / yarn as well )
- pnpm add -D typescript ts-node ( add in devDependencies )
- npx tsc --init
- mkdir src
- modify package.json -> scripts -> "start": "ts-node ./src/main.ts"
- pnpm start ( check everything work as expected )

2. if project runs as expected

- git init
- create .gitignore

3. create a simple http-server

```ts
import http from "http";

const server = http.createServer((req, res) => {
  res.end("hello world");
});

server.listen(3000, () => console.log("serverrunning"));
```

4. updating our code to send back string according to url

```ts
// import http from "http";
// const server = http.createServer((req, res) => {

console.log(req.method, req.url);
if (req.url === "/hello" && req.method === "GET") {
  res.end("hello from server!");
  return;
}

//   res.end("hello world");
// });
// server.listen(3000, () => console.log("serverrunning"));
```

5. changing output from string to stringified json

```ts
// import http from "http";
// const server = http.createServer((req, res) => {
// console.log(req.method, req.url);
// if(req.url === "/hello"){

res.appendHeader("Content-Type", "application/json");
res.end(JSON.stringify({ name: "amir" }));

//     return;
// }
//   res.end("hello world");
// });
// server.listen(3000, () => console.log("serverrunning"));
```

5. updating methods in each result handler

```ts
// import http from "http";
// const server = http.createServer((req, res) => {
// console.log(req.method, req.url);
if (req.url === "/hello" && req.method === "GET") {
  // res.appendHeader("Content-Type","application/json")
  // res.end(JSON.stringify({"name":"amir"}))
  return; // if we dont use return; here it will rise error cause we only can use res.end once.
}

if (req.url === "/hello" && req.method === "POST") {
  // res.appendHeader("Content-Type","application/json")
  // res.end(JSON.stringify({"name":"amir"}))
  // return;
}
//   res.end("hello world");
// });
// server.listen(3000, () => console.log("serverrunning"));
```

6. adding req.on to handle data coming from client

- IDE extendtion for rest APIs: Rest Client
- if we don't use data.toString(), we will get a buffer response. To use that response we have to use toString()

```ts
// import http from "http";

// const server = http.createServer((req, res) => {
//   console.log(req.method, req.url);
//   if (req.url === "/hello" && req.method === "GET") {
//     res.appendHeader("Content-Type", "application/json");
//     res.end(JSON.stringify({ name: "amir" }));
//     return;
//   }

//   if (req.url === "/hello" && req.method === "POST") {
    req.on("data", (data) => {
      const userData = data.toString(); // converting buffer
      const userJSON = JSON.parse(userData); // convert to json
      res.appendHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ name: data.name }));
      return;
        }
    });

//   res.end("hello world");
// });

// server.listen(3000, () => console.log("serverrunning"));
```

7. using GET method with Query Params, retriving data from req.url

- parsing url using parse imported from url will retrive data like query params, port, host and etc

```
GET /hello?name=AmirFromQueryParams
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=AmirFromQueryParams',
  query: [Object: null prototype] { name: 'AmirFromQueryParams' },
  pathname: '/hello',
  path: '/hello?name=AmirFromQueryParams',
  href: '/hello?name=AmirFromQueryParams'
}
```

```ts
// import http from "http";
import { parse } from "url";

// const server = http.createServer((req, res) => {
//   console.log(req.method, req.url);

const url = parse(req.url || "", true);
console.log(url);

// if (req.url === "/hello" && req.method === "GET") {
//   res.appendHeader("Content-Type", "application/json");
//   res.end(JSON.stringify({ name: "amir" }));
//   return;
// }

//   if (req.url === "/hello" && req.method === "POST") {
// req.on("data", (data) => {
//   const userData = data.toString(); // converting buffer
//   const userJSON = JSON.parse(userData); // convert to json
//   res.appendHeader("Content-Type", "application/json");
//   res.end(JSON.stringify({ name: data.name }));
//   return;
//     }
// });

//   res.end("hello world");
// });

// server.listen(3000, () => console.log("serverrunning"));
```

