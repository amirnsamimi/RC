## Branching 
### every branch contain all of the repo ( entirety ) and hold the whole commit 

```bash 
git branch foo

## observing local branches

git branch

## to get branch SHA 
## if both exist in head the SHA is the same 

cat .git/refs/heads/foo
cat .git/refs/heads/main

## to go to branch 

git branch <branch-name>
git switch <branch-name>


## deleting branch 

git branch -D <branch-name>

```


- to add text to a file -> echo "B" >> readmeB.md