import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Game from './components/Game';
import HighScores from './components/HighScores';
import Navbar from './components/Navbar';
import NewRules from './components/NewRules';
import PrivateRoute from './privateRoute.js';
import GameOverWon from './components/GameOverWin';
import GameOverLose from './components/GameOverLose';

import Home from './components/Home';
import Signup from './components/Signup';
import Snake from './components/Snake';
import Login from './components/Login';
//import Header from './components/Header';
//import Footer from './components/Footer';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

       <div className="App">
      <Router>
        
        <Routes>
          {/* <Route exact path="/" element={<Home/>}/> */}
          <Route
            exact
            path="/"
            element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>} />
            <Route 
            exact
            path="/game" 
            element={
              <PrivateRoute>
            <Game/>
            </PrivateRoute> }/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/rules" element={<NewRules />} />
          <Route path="/snake" element={<Snake />} />
          <Route 
          exact 
          path="/highscores" 
          element={
            <PrivateRoute>
          <HighScores />
          </PrivateRoute>} />
        </Routes>

      </Router>

    </div>
    </ApolloProvider>
  );
}

export default App;
