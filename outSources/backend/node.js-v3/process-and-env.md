## Process & Environment

nodejs is running in OS env , js in on Browser ENV

- `process.argv`: an array that contains the command line arguments passed to the current process
- `process.pid`: the ID of the current process
- `process.env`: an object that contains the environment variables of the current process
- `process.exit()`: terminates the current process with an optional exit code

## passing args to terminal

```bash

node index.js thing thhing2 124123

```

## ENV

- when ever we want to have env, we can make some and inject it to our server so there people cant find it on gh and steal it

if we run

```bash

NODE_ENV=production node script.js

```

and script is

```js
console.log(process.env.NODE_ENV);
```

we will get production
