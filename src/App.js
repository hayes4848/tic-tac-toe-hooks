import React, { useState } from 'react';
import Row from './row'
import './App.css';

const App = () => {
    const [game, updateGame] = useState([["","",""],["","",""],["","",""]]);
    const [startingChar, updateStartingChar] = useState("X");

    const resetGame = () => {
      updateGame([["","",""],["","",""],["","",""]])
    }

    const handleGameUpdate = (rowIndex, cellIndex) => {
      let updatedGame = [...game]
      updatedGame[rowIndex][cellIndex] = startingChar
      updateGame(updatedGame)
      updateStartingChar(startingChar === "X" ? "O" : "X")
    }

    const rows = game.map( (row, index) => {
      return <Row key={index} rowIndex={index} row={row} updateGame={handleGameUpdate} />
    })

    return (
      <div className="App">
        <div className="starting-text">it is {startingChar}'s turn to play! </div>
        {rows}
        <button className="reset-button" onClick={() => { resetGame() }}>Reset Board</button>
      </div>
    );

}

export default App;
