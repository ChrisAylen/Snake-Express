# Snake Express

[]: # Language: markdown
[]: # Path: README.md

![](https://img.shields.io/badge/license-MIT-blue.svg)
    
## Description
    
This is MERN stack application that allows the user to play Snake!  Additionally, it uses GraphQL for data management.

The game keeps track of user scores using both local storage (just for local user scores) and Mongo DB for all user scores allowing the application to keep track of the all time top 10 scores.

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Screenshot](#screenshots)

* [Deployed Version](#deployment)

* [Docker](#docker)

* [Questions](#questions)

* [To Do](#todo)

## Installation
    
'npm i' to install the necessary dependencies.

If you are going to use a remote Mongo DB (e.g. Atlas) then create a file named .env with the following contents:

```
MONGODB_URI=yourMongoStringGoesHere

```

### Setting up the database

The application comes with some random seed data  To push this data into the database, do the following:
```
npm run seed
```

## Usage

The application supports the following funcitonalities:

### Users
```
1. Signup a new user
2. Login an existing user
```
### Game
```
1. Play the snake game
```
### Scores
```
1. Display your local score and high score on game completion
2. In the High score menu, see the top 10 all time scores
```

## GraphQL / Apollo

The application utilises Apollo Client and as standard a sandbox environment can be found at:

localhost:3001/graphql


### Queries
#### Get High Scores
```
query Scores {
  scores {
    username
    score
    createdDate
  }
}
```
### Mutations

#### Login
```
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
```
#### Add Score
```
mutation AddScore($score: Int!) {
  addScore(score: $score) {
    score
  }
}
```
#### Add User
```
```





## Screenshots

![alt Homepage](/assets/images/homepage.png)

![alt Accounts](/assets/images/Accounts.png)

![alt Transfer](/assets/images/Transfer.png)

![alt Statement](/assets/images/Statement.png)

## API

![alt Landing Page](/assets/images/API_Endpoints_available_from_the_FE.PNG)


## Front End


## Deployment

[Deployed Version](https://peaceful-lassen-volcanic-80125.herokuapp.com/)

## Docker

[Docker Repository](https://hub.docker.com/r/chrisaylen/bankheist/)
   
## License
    
This project is licenced under MIT

## Questions

[More of my work can be found here](https://github.com/ChrisAylen)

TODO: Add other team members Github links

## ToDo

The applicaiton needs:
```
    * More robust authentication on endpoints.  The current application allows any      
      authenticated user to access any transactions.  This is not secure.
    * Tests adding
    
```
    
