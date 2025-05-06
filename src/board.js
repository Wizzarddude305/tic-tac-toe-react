import React, { useState, useEffect } from 'react';
import './board.css'

function Board({ playerNum, setPlayerNum, victory, setVictory, playWon, playerWon }){
    const [boxes, SetBox] = useState(Array(9).fill("_"))

    const playerWinning = (index) =>{
        if(boxes[index] === 'X')
            playerWon("Player1 won")
        else{
            playerWon("Player2 won")
        }
    }


    const winCheck = (newBoxes) => {
        if (newBoxes[0] !== '_' && newBoxes[0] === newBoxes[4] && newBoxes[0] === newBoxes[8]){
            setVictory(true);
            playerWinning(0);
            return;
        } else if (newBoxes[2] !== '_' && newBoxes[2] === newBoxes[4] && newBoxes[2] === newBoxes[6]){
            setVictory(true);
            playerWinning(2);
            return;
        }
    
        for (let x = 0; x <= 6; x += 3) {
            if (
              newBoxes[x] !== '_' &&
              newBoxes[x] === newBoxes[x + 1] &&
              newBoxes[x] === newBoxes[x + 2]
            ) {
              setVictory(true);
              playerWinning(x);
              return;
            }
        }
    
        for (let x = 0; x <= 2; x++) {
            if (
              newBoxes[x] !== '_' &&
              newBoxes[x] === newBoxes[x + 3] &&
              newBoxes[x] === newBoxes[x + 6]
            ) {
              setVictory(true);
              playerWinning(x);
              return;
            }
        }
    }

    const handleClick = (playerNum,index) => {
        if (boxes[index] === '_'){
            const newBoxes = [...boxes];
            newBoxes[index] = playerNum === 1 ? 'X' : 'O';
            console.log("Clicked")
            setPlayerNum(playerNum === 1 ? 2 : 1)
            SetBox(newBoxes);
            winCheck(newBoxes)
        }else{
            return;
        }
    
    }

    return(
        <div>
            <div className ="grid">
            {boxes.map((box, index) => (
                <div key={index} className="box" onClick={() => handleClick(playerNum, index)}>
                 {box}
                </div>
            ))}
            </div>
        </div>
    )

}


export default Board;