import { useState } from "react";
import "../styles/TicTacToe.css";
import Board from "./Board";
import CalculateWinner from "./CalculateWinner";
import { Constants } from "./Constants/Constants";

const TicTacToe = () => {
 
  const {
    NO_OF_TILES_IN_THE_BOARD,
    EMPTY,
    Player_O,
    Player_X,
    MATCH_DRAW_MESSAGE,
    NEXT_PLAYER_TURN_MESSAGE,
    DECLARE_WINNER_MESSAGE,
    RESET_BUTTON_TEXT,
    TITLE
  } = Constants;

  const [board, setBoard] = useState(Array(NO_OF_TILES_IN_THE_BOARD).fill(EMPTY));
  const [isNextX, setIsNextX] = useState(true);
  const winner = CalculateWinner(board);

  const handleClick = (position) =>{
    const updateBoard = [...board];
    if(winner || updateBoard[position]) return;
    updateBoard[position] = isNextX ? Player_X : Player_O;
    setBoard(updateBoard);
    setIsNextX(!isNextX); 
  }

  const resetGame = () => {
    setBoard(Array(NO_OF_TILES_IN_THE_BOARD).fill(EMPTY));
  };

   let status;
  if (winner) status = DECLARE_WINNER_MESSAGE + winner;
  else if (board.every(Boolean))  status = MATCH_DRAW_MESSAGE
  else  status = NEXT_PLAYER_TURN_MESSAGE + (isNextX ? Player_X : Player_O);


 
 
  return (
    <div data-testid="tictactoe" className="container">
      <div data-testid="header">
        {TITLE}
        <Board boardTestId="board-container" tiles={board} onClick={handleClick}/>
        <div data-testid="status"> {status} </div>
        <button data-testid="reset" className="reset" onClick={resetGame}>
        {RESET_BUTTON_TEXT}
      </button>
      </div>
    </div>
  );
}

export default TicTacToe;
