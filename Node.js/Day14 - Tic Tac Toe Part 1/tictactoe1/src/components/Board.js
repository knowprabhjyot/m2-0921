import React, { useEffect, useState } from "react";
import Square from "./Square";

export default function Board() {
  const [boardSize, setBoardSize] = useState(new Array(9).fill(0));
  const [player, setPlayer] = useState(1);


  // ASSIGNMENT FOR THIS GAME - 
  // Change background color of the winning person
  // Maintain a score of the winning person, You can ask the user their name, and you can ask them how many games they want to play
  // Have a reset button
  // If the game draws, just notify by saming it was a draw
  // Challenging exercises - If the user doesn't respond in 10 seconds, automatically mark his/her position

  const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  useEffect(() => {
        
        for (let item of winningCombinations) {

            console.log(boardSize[item[0]], "ITEM");
            if (boardSize[item[0]] === 1 && boardSize[item[1]] === 1 && boardSize[item[2]] === 1) {
                alert("Player 1 won the game");
            }

            if (boardSize[item[0]] === 2 && boardSize[item[1]] === 2 && boardSize[item[2]] === 2) {
                alert("Player 2 won the game");
            }

        }
  }, [boardSize])

  const handleClick = (position) => {
     if (boardSize[position] === 0)  {
        let tempSize = [...boardSize];
        tempSize[position] = player;
  
        setPlayer(player === 1 ? 2 : 1);
        setBoardSize(tempSize);
     } else {
         alert("Click on empty cells");
     }
  }

  return (
    <div>
      {boardSize.map((data, index) => {
        return <Square handleClick={handleClick}  mark={data} position={index} />;
      })}
    </div>
  );
}
