import React from 'react';
import { useQuery } from '@apollo/client';

import SnakeGame from '../components/Snake/SnakeGame';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <SnakeGame />
      </div>
    </main>
  );
};

export default Home;