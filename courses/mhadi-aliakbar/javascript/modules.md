## Modules

- AMD ( asynchronous module definition )
- Common JS
- UMD ( Universal module definition including AMD and Common as well )

## Now

```js
//index.js

import defaultPerson, { person as user } from "relative-path-to-file";


console.log(user.name, defaultPerson.name); // amir , hadi
```

```js
// person.js

export const person = {
  name: "amir",
};

const defaultPerson = {
  name: "hadi",
};

export default defaultPerson;
```
