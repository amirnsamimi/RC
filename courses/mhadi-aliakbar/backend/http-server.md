## Creating HTTP-SERVER with node.js

1. creating project
- mkdir < backend > ( backend is a placeholder change as you wish )
- pnpm init ( you can choose npm / yarn as well )
- pnpm add -D typescript ts-node  ( add in devDependencies )
- npx tsc --init 
- mkdir src
- modify package.json -> scripts -> "start": "ts-node ./src/main.ts"
- pnpm start ( check everything work as expected )

2. if project runs as expected 
- git init 
- create .gitignore