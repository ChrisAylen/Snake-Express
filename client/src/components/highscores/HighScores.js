import { useState } from 'react'
import './highscores.css';
import { useQuery } from '@apollo/client';
import {QUERY_SCORE} from '../../utils/queries'
import Auth from '../../utils/auth';

import Navbar from '../Navbar';

//Use QUERY_SCORES to get score data
//const {scores} = useQuery(QUERY_SCORES)



// const data = [
//   { username: "Anom", score: 19000 },
//   { username: "Megha", score: 19250 },
//   { username: "Subham", score: 25000},
// ]

export default function Scores() {
  const { loading, data } = useQuery(QUERY_SCORE);
  //console.log(data)
  const scores = data?.scores || [];
  //console.log(scores)
    const [allTime, setallTime] = useState(0);

  const handleClick = (e) => {
     
    setallTime(e.target.dataset.id)
  }

  return (
    <>
    <Navbar/> 
    <br></br>
    <br></br>
    <br></br>
    <h1 className="topScore"> All time Top-10 Scores</h1>
    <br></br>
    <br></br>
    <br></br>
    <div className="Highscore">
      <table>
        <tr className="mainRow">
          <th>Username</th>
          <th>Score</th>
        </tr>
        {loading ? (
            <div>Loading...</div>
          ) :<>
        {scores.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.username}</td>
              <td>{val.score}</td>
            </tr>
          )
        })}</>}
      </table>
    </div>
  ;


    </>
  )
}


