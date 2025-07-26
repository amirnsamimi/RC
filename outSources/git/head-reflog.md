## HEAD, REFLOG

- when ever we checkout **HEAD** will point to whatever branch we checkout
- if we cat .git/HEAD we have ref: refs/heads/foo
- head is a pointer to what currently you are using 
- if we do again cat ./git/refs/heads/foo -> **its just a commit**

## REFLOG 
- shows where head was in entire code base
- it live in logs / heads and reflog is prettying this file

```bash
git reflog ##to get the whole thing 
git reflog -3 ##to get like only the last three one where head was living in
cat .git/logs/HEAD | tail -3 ## also gives last 3 but not prettified 
```