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

## USAGE 

- think about creating a branch add a file to it and the go back to main and delete the created branch
- so do we lost are we have done ? 

#### lets see 

- first recover SHA with reflog 
- then find the last commit 
- haha: git cat-file -p <That SHA>
- we can build entire deleted branch from <That SHA>, Wonderful!
- so... get the tree SHA and cat-file -p into it 
- then... we can see the file SHA and 
- then... git cat-file -p <File SHA>  > buzz.md
- then... git status 
- then... git add . 
- then... git diff --staged 
- and TADA! we have recovered the missing file.


## THE EASIER WAY , MERGE, DETACHED BRANCH

- git reflog ( get the LOST SHA )
- git merge <LOST SHA>
- DONE!

* what if histories were diverged a lot ? a there are n commit betwixt ( between )
* it might make some problems like will get all the history add it to a third branch then merge it with the trunk branch. SO WE MIGHT NOT WANT SUCH THING!


## SOLUTION -> CHERRY PICK 

- let you get one or more commits specifically 
```bash 
git cherry-pick <SHA>
git cherry-pick <SHA> <SHA2>
git cherry-pick --abort
```



