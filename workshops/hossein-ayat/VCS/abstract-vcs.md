## FEATURE BRANCH

# COMMIT EARLY, COMMIT OFFEN

- when developing a feature we add branch
- then we will merge / rebase
- #### merge commit
- squashing

## merge vs rebase vs squashing-rebase

- when merging we will have difficult transparency and bisecting
- squash rebase is more efficient to use
- to solve an issue on for exmaple f commit which is one commit behind, we copy f and add others as a copy to f.

## MASTER BRANCH

- last changes that is on production ( on master branch )

## STAGE BRANCH

- last changes that is ready to be released

## DEV BRANCH

- last changes that are ready to test

## we have a project

- we have 3 branches for 3 diff organizations
- we made a security bug fix
- we then we copy the security bug fix and add to each branch so we won't have the history commits on the one.
- because we don't want other branches have the history of other customers.

## Rebase

- we are on stage branch, --a--b--c--d ( stage ) ---e ---f  (f1)
- we do git rebase stage cause they are on the same line only stage comes forward -> called fast-forward
- git branch -f x -> if exsit else where do it by force and make one where I say.
- cherry-pick -> get a commit and copy it to another

## Rebase -i ( interactive rebase )

- git rebase -i x
- can drop
- can pick
- can squash

- ### squashing will be done in Rebase -i
- ### conflict resolvig

- to mark the changed
- 1.edit
- 2.save
-
    3. git add <that file>
-
    4. git rebase --continue

## SERVER ONLY ACCEPT FAST FORWARD CHANGE SET

- with rebase -i -> squashed it will rise error
- and we will say ghalat kardi and use git push -f
- might be dangerous!

## origin / remote

- git fetch - -
- automated remote and origin branches tags like O/DEVELOP, O/MAIN, R/MAIN and R/DEVELOP ( R: REMOTE, O: ORIGIN )

-[learn git branching](https://learngitbranching.org)
- git push -u origin master 
- git push -u origin2 develop 

- automatically will find out where to push what