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
if(req.url === "/hello"){
    res.end("hello from server!")
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

    res.appendHeader("Content-Type","application/json")
    res.end(JSON.stringify({"name":"amir"}))
    
//     return;
// }
//   res.end("hello world");
// });
// server.listen(3000, () => console.log("serverrunning"));
```
