import { useState } from 'react'
import Profile from './Profile'; //BackEnd?
import { HighScores } from './database'; //Backend
import  {between} from '../../utils/dateFunction'
import './highscores.css';
import { useQuery } from '@apollo/client';

import Navbar from '../Navbar';



export default function Scores() {

    const [allTime, setallTime] = useState(0);

  const handleClick = (e) => {
     
    setallTime(e.target.dataset.id)
  }

  return (
    <>
    <Navbar/>
    <div className="scores">
        <h1 className='highScores'>HighScores</h1>

        <div className="duration">
            <button onClick={handleClick} data-id='0'>All-Time</button>
        </div>

    

    </div>
    </>
  )
}


