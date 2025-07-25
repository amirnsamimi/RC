## BASICS AND COMMIT

```bash

git add <pattern | path-to-file>
git commit -m "<message>"
git status

git log ## look at history has two option --graph & --decorate
git log --graph --decorate  > out
cat out ## if we dont use graph and decorate ( head -> master ) wont save

```

## SHAs COMMITS

- we can use first 7 chars instead of the whole thing.
- different by commits authors date and etc
- commits with SHAs will saved into .git/objects/<first 2 SHA char>/<rest 38 SHA char>
- if we cat it we will se something compressed and unreadable to read that use -> git cat-file -p <any-sha>

```bash

git cat-file -p <SHA>

## tree SHA
## author
## committer

## commit message

git cat-file -p <tree-sha>

## <file-permission> blob <SHA> <file-name>

git cat-file -p <blob-SHA>

## exact point of where we made change ( entire file )

```

- tree is directory
- blob is file

## NOW AFTER ADDING NEW FILE second.md

```bash

git cat-file -p <SHA-SECOND COMMIT>

## tree SHA
## parent SHA
## author
## committer

## commit message

git cat-file -p <tree-sha>
## <file-permission> blob <first BLOB-SHA> <file-name>
## <file-permission> blob <SHA> <file-name>
## <file-permission> blob <new BLOB-SHA> <file-name>
git cat-file -p <blob-SHA>

## exact point of where we made change ( entire file )

```

- git is not linkedlist
- git is acyclic graph that should be linear and unironic order by time
- we do bisecting its good to know that its depended on time

```bash 

git --help

```