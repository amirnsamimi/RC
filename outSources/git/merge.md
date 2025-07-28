## MERGE

- merge might has 2 different situations 
1. Must have a comment
2. Don't need a comment

- rebase might help to merge
  - No modified tracked files (i.e., files that Git knows about haven’t been edited).
  - No staged files (i.e., nothing in the staging/index area).
  - No untracked files (i.e., no new files in the working directory that aren’t in the repository).
  - No unmerged changes (i.e., not in the middle of a merge or rebase).
  - The HEAD is pointing at a known commit (not in a detached or corrupted state).

* git merge, merges two branches that doesn't have same commits in their history and preserve history. 
* git merge will do a hashmap algorithm and goes up to find a common and the common is ancestor 
* merging will create a new comment but notice that, the merge has 2 parents now.
```bash 

git log --oneline
git merge <branch you wish you want to bring on>

git checkout -b <new branch>

## merge with ort strategy or three-way commit strategy

git log --onelone --parent --decoration --graph




```

## WATCH AGAIN