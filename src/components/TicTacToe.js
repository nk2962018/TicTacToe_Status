import { useState } from "react";
import { Constants } from "./Constants/Constants";
import "../styles/TicTacToe.css";
import Board from "./Board";

const TicTacToe = () => {

  const [board, setBoard] = useState(Array(Constants.NO_OF_TILES_IN_THE_BOARD).fill(Constants.EMPTY));
  const [isNextX , setIsNextX] = useState(true);

  const handleClick = (position) =>{
    const updateBoard = [...board];
    if(updateBoard[position]) return;
    updateBoard[position] = isNextX ? Constants.Player_X : Constants.Player_O;
    setBoard(updateBoard);
    setIsNextX(!isNextX); 
  }

  return (
    <div data-testid="tictactoe" className="container">
      <div data-testid="header">
        {Constants.TITLE}
        <Board boardTestId="board-container" tiles={board} onClick={handleClick}/>
      </div>
    </div>
  );
}

export default TicTacToe;
