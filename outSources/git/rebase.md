## Rebase 

- rebasing will be like when you have develope branch and main branch. the develope branch ancestor is A in main and main is 3 commits ahead therefore we might need rebase to rewrite the history and update the develope branch

## steps ahead

- execute the code 
- checkout latest commit on target branch 
- play one commit at a time from <current branch>
- once finished update the <current branch>


```bash 
git rebase <target branch>
```

- after rebase the current branch is no longer diverging from target and will continue history on target
- if having another repo with the same <current branch>, and we know out <current branch> is correct and what it has. we will do --force or -f to force push ours over it
**never change history of a public branch**