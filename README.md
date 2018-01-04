# spotifyVoiceBackend
Backend for the spotify voice controlled application

## WHEN YOU FIRST PULL CODE
* run command `npm install`

## TO RUN SERVER
In one terminal window
```
$ mongod
```
In other window
```
$ npm run build
$ npm start
```

Go to [http://localhost:3001](http://localhost:3001) to view root page

## DIAGRAM OF DATABASE STRUCTURE
none yet available

## SMARTRG REST API
### NOTE: MAKE SURE SERVER IS RUNNING
| REQUEST | LINK | STATUS CODE |
| ------ | ------ | ------ |
| POST/GET |  | OK: 200 INVALID ENTRIES: 400 SERVER ERROR: 500 |
| GET |  | OK: 200 DATA NOT FOUND: 404 SERVER ERROR: 500 |
| POST/GET |  | OK: 200 INVALID ENTRIES: 400 SERVER ERROR: 500 |
| POST/GET |  | OK: 200 INVALID ENTRIES: 400 SERVER ERROR: 500 |
| POST/GET |  |
| POST/GET |  | OK: 200 INVALID ENTRIES: 400 SERVER ERROR: 500 |
* A helpful tool to use is [Postman](https://www.getpostman.com/) for making the POST/PATCH/GET requests

## REFERENCES 
* Setup for database class [Part 2: Using MongoDB with Node.js](https://www.mongodb.com/blog/post/the-modern-application-stack-part-2-using-mongodb-with-nodejs)
* MongoDB documentation [MongoDB](http://mongodb.github.io/node-mongodb-native/2.2/api/)
* Chainable Routing using express.js [Express Routing](https://expressjs.com/en/guide/routing.html)
* Schema for validation of fields [npm json-validation](https://npm.runkit.com/json-validation)
