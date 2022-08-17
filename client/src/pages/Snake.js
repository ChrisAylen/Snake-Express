import React from 'react';
import { useQuery } from '@apollo/client';

import SnakeGame from '../components/Snake/SnakeGame';

import { QUERY_THOUGHTS } from '../utils/queries';

import Auth from '../utils/auth';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  if(Auth.loggedIn()) {

  return (
    <main>
      <div className="flex-row justify-center">
        <SnakeGame />
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