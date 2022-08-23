import React from 'react';
import Navbar from "../Navbar";
import './SnakeGame.css'

function GameOver(props) {
  return (
    <>
    <Navbar />
    <div className="Homepage flex flex-row items-center justify-center">
    <div
      id='GameBoard'
      style={{
        width: props.width,
        height: props.height,
        borderWidth: props.width / 50,
      }}>
      <div id='GameOver' style={{ fontSize: props.width / 15 }}>
        <div id='GameOverText'>GAME OVER</div>
        <div id="yourScore">Your score: {props.score}</div>
        <div id="yourScore">
          {props.newHighScore ? 'New local ' : 'Local '}high score:{' '}
          {props.highScore}
        </div>
        <div id='PressSpaceText'>Press Space to restart</div>
      </div>
    </div>
    </div>
    </>
  )
}

export default GameOver
