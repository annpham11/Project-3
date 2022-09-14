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