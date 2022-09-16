# Trivia Night App 

# Development 

## Project setup

``` 
npm install 
cd client
npm install
```

## Start server 

``` 
npx nodemon
or npm start 
``` 

## Run react app in dev mode 

``` 
cd client
npm start 
``` 

## Spin up dev mode for server and react app
This will serve react app from express but you have to refresh to see changes.
``` 
npm run serve
```


## Deploying to heroku
```
cd client
npm run build
cd ..
git add .
git commit -m "heroku build"
git push heroku BRANCH-NAME:main
```
## Setting up SQL

1. create a database called trivia_project 
2. added 

## Setting up Reacter Router 


1. npm install react-router-dom@6 

## to run backend
pwd
cd /Users/annpham/seifxr08anz/Projects/project-3/Project-3/client
npm start

## to run front end
cd.../
cd client
npm start


## to kill 3001
netstat -vanp tcp | grep 3001
kill -9 PID