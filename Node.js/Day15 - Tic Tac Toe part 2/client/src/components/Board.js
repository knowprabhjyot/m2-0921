import React, { useEffect, useState } from "react";
import Square from "./Square";

export default function Board({ socket, username, roomNumber}) {
  const [boardSize, setBoardSize] = useState(new Array(9).fill(0));
  const [player, setPlayer] = useState(1);


  useEffect(() => {
    socket.on("recieve_message", (data) => {
        setBoardSize(data.boardSize);
        setPlayer(data.id);
    })
  }, []);

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

            if (boardSize[item[0]] === 1 && boardSize[item[1]] === 1 && boardSize[item[2]] === 1) {
                alert("Player 1 won the game");
            }

            if (boardSize[item[0]] === 2 && boardSize[item[1]] === 2 && boardSize[item[2]] === 2) {
                alert("Player 2 won the game");
            }

        }
  }, [boardSize])

  const handleClick = async (position) => {
     if (boardSize[position] === 0)  {
        let tempSize = [...boardSize];
        tempSize[position] = player;
  
        setPlayer(player === 1 ? 2 : 1);

        const messageBody = {
          room: roomNumber,
          userName: username,
          id: player === 1 ? 2 : 1,
          boardSize: tempSize
        };
  
        await socket.emit("send_message", messageBody);
        
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
