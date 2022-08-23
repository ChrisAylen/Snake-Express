import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
//import {useMutation} from "@apollo/client";

import SnakeGame from './Snake/SnakeGame';

import { QUERY_THOUGHTS } from '../utils/queries';

import {ADD_SCORE} from "../utils/mutations";

import Auth from '../utils/auth';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const [addScore] = useMutation(ADD_SCORE);
const onUpdateScore = (score) => {
  addScore({
    variables: {
      score
    }
  });
}
  
  if(Auth.loggedIn()) {

  return (
    <main>
      <div className="flex-row justify-center">
        {/* Add a prop */}
        <SnakeGame
        onUpdateScore={onUpdateScore}
        />
      </div>
    </main>
  );
  } else {
    return (
      <main>
        <div className="flex-row justify-center">
          <h2>You need to be logged in to see this. Use the navigation links above to sign up or log in!</h2>
        </div>
      </main>
    );
  }
};

export default Home;