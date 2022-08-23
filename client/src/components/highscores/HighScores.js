import { useState } from 'react'
import Profile from './Profile'; //BackEnd?
import { HighScores } from './database'; //Backend
import  {between} from '../../utils/dateFunction'
import './highscores.css';
import { useQuery } from '@apollo/client';

import Navbar from '../Navbar';

const data = [
  { username: "Anom", score: 19000 },
  { username: "Megha", score: 19250 },
  { username: "Subham", score: 25000},
]

export default function Scores() {

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
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.username}</td>
              <td>{val.score}</td>
            </tr>
          )
        })}
      </table>
    </div>
  ;


    </>
  )
}


