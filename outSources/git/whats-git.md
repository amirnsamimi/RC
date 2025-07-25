## What is GIT ?

- man man ( manual ex: man git)

- VCS
- Commands divided into high level ("porcelain") and low level ("plumbing")

1. porcelain

```bash
git add
git commit
git push
git pull
git status
git log
git checkout
```

2. plumbing ( how git work )

```bash
git hash-object
git cat-file
git update-index
git rev-parse
git ls-tree
git read-tree
git write-tree
```

## Key Terms

- repo: a git tracked project
- commit: a point in time representing the project in its entirety ( The SHA represents a commit, 40 a-f 0-0 chars is calculated from contents of change, author, time and more. // every single commit is entire code base
- index: use this term or staging area interchangeably. ( the state after git add , before git commit)
- squash: take several commits and turn to one commit
- working tree: YOUR STUFF! the files in your repo that sets up by git init or git clone and working on them changing them and etc
- untracked, staged and tracked: no-tracked -> [add to index] stagged -> [ commit ] tracked by history

# Everything about git

- git is an acyclic graph ( a graph that contains no cycles )
- each commit is a node in the graph and each pointer is the child to parent relation
- if you remove something not tracked it will be lost forever
- always man git -

# People usually knows about

1. push
2. pull
3. add
4. commit
5. status
