## CONFIG & LOCATION 

```bash

git config --add --global user.name "amirnsamimi"
git config --add --global user.email "amirnsamimi@gmail.com"

## we can make our own 

git config --add <section>.<keyname> value 

## example 
## to set / change
git config --add amir.dev "is great"

## to get
git config --list | grep fem
git --get-regexp fem
get --get-regexp m. ## to get all

## to get key value
git config --get fem.dev

## to remove
git config --remove-section fem

## unset

git config --unset dev.fem would 
git config --unset-all dev.fem

## config is a file in .git
## cat .git/config
## if adding config to global and with the same key to local and --remove-section fem and then  git config --list | grep fem and then add --local fem we will get 2 values one in global and one in local but when we do git config --get fem we get the local value
```

```bash 
git config project.type "backend"
git config project.language "python"

## usage 
API_KEY=$(git config mytool.apiKey)

## example 
git config --local my.build.env "staging"
#!/bin/bash
ENV=$(git config my.build.env)
if [ "$ENV" == "staging" ]; then
    echo "Deploying to staging server..."
fi


```
