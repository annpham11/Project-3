# Trivia Night App 

# Development 

## Project setup

``` 
npm install 
npm install nodemon --save-dev 
```

## Start server 

``` 
npx nodemon
or npm start 
``` 

## Run dev server 

``` 
cd client
npm start 
``` 

## Build frontend and serve frontend with api

``` 
cd client
npm run build
cd ..
npm start
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
