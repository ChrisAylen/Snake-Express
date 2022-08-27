# Snake Express

[]: # Language: markdown
[]: # Path: README.md

![](https://img.shields.io/badge/license-MIT-blue.svg)
    
## Description
    
This is a MERN stack application that allows the user to play Snake!  Additionally, it uses GraphQL for data management.

The game keeps track of user scores using both local storage (just for local user scores) and Mongo DB for all user scores allowing the application to keep track of the all time top 10 scores.

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Screenshots](#screenshots)

* [Deployed Version](#deployment)

* [Credits](#credits)

* [Licence](#license)

* [Questions](#questions)

* [To Do](#todo)

## Installation
    
'npm i' to install the necessary dependencies.

If you are going to use a remote Mongo DB (e.g. Atlas) then you will need to configure an environmental variable with the following contents:

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

##### Request
```
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    user {
      username
    }
  }
}
```
##### Header
```
{  "username": "test2",
  "email": "test2@test.com",
  "password": "SuperDuperSecretPassword"
}
```


## Screenshots

![alt Homepage](/images/Home%20Page%20-%20SignIn.png)

![alt Homepage](/images/Home%20Page%20-%20Logged%20In.png)

![alt Sign Up](/images/SignUpForm.png)

![alt Sign In](/images/SignInForm.png)

![alt Rules](/images/Rules.png)

![Snake Game](/images/SnakeGameScreen.png)

![High Scores](/images/HighScores.png)

![Apollo Sandbox](/images/ApolloSandbox.png)


## Deployment

[Deployed Version](https://obscure-ridge-72385.herokuapp.com/)

## Credits
This project was a collaboration between:


* [Matteo Sanna](https://github.com/mattesanna017)

* [Tamin](https://github.com/tamin96)

* [Chris Aylen](https://github.com/ChrisAylen)

### Game engine was based on:

[react-simple-snake](https://github.com/MaelDrapier/react-simple-snake) by Maël Drapier
   
## License
    
This project is licenced under MIT

## Questions

[More of my work can be found here](https://github.com/ChrisAylen)

## ToDo

The applicaiton needs:
```
    * Better password management
    * Tests adding
    * Different Snake modes
    
```
    
