import React, { useState } from 'react';
import Board from './board';

function App() {
  const [playerNum, setPlayerNum] = useState(1); 
  const [victory, setVictory] = useState(false);
  const [playWon , playerWon] = useState("")

  return ( !victory ?
    <div>
        <h1>Tic-Tac-Toe</h1>
        <p>Current Player: {playerNum === 1 ? "Player 1 (X)" : "Player 2 (O)"}</p>
        <Board 
          playerNum={playerNum} 
          setPlayerNum={setPlayerNum} 
          victory={victory} 
          setVictory={setVictory} 
          playWon={playWon} 
          playerWon={playerWon}
        />
    </div> :
    <div>
      <h1>Tic-Tac-Toe</h1>
      <p>{playWon}</p>
    </div>
  );
}

export default App;
