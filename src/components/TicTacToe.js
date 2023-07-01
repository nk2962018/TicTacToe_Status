import { useState } from "react";
import "../styles/TicTacToe.css";
import Board from "./Board";
import { Constants, WINNING_COMBINATIONS } from "./Constants/Constants";
import Status from "./Status";

const TicTacToe = () => {
 
  const {
    NO_OF_TILES_IN_THE_BOARD,
    EMPTY,
    PLAYER_O,
    PLAYER_X,
    RESET_BUTTON_TEXT,
    TITLE,
    
  } = Constants;

  const calculateWinner = (board) => {
    for (let combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const [board, setBoard] = useState(Array(NO_OF_TILES_IN_THE_BOARD).fill(EMPTY));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);
  const winner = calculateWinner(board);

  
  const markOntheDesiredPosition = (currentPosition, desiredPosition, board) => {
    if (currentPosition === desiredPosition) {
      return currentPlayer === PLAYER_X ? PLAYER_X : PLAYER_O;
    }
    return board;
  };

  const markOnTheTileAt = (desiredPosition) => {
    const updateBoard = [...board]
    if(winner || updateBoard[desiredPosition]) return;
    const tilesAfterMarking = board.map((board, position) => {
      return markOntheDesiredPosition(position, desiredPosition, board);
    });
    setBoard(tilesAfterMarking);
    nextPlayerTurn();
  };

  const resetGame = () => {
    setBoard(Array(NO_OF_TILES_IN_THE_BOARD).fill(EMPTY));
    setCurrentPlayer(PLAYER_X)
  };

  const nextPlayerTurn = () => {
    setCurrentPlayer(currentPlayer === PLAYER_X ? PLAYER_O:PLAYER_X );
  }

  return (
    <div data-testid="tictactoe" className="container">
      <div data-testid="header" className="title">
        {TITLE}
        <Board boardTestId="board-container" tiles={board} onClick={markOnTheTileAt}/>
        {/* <div data-testid="status"> {status} </div> */}
        <Status player={currentPlayer} winner={winner} board={board}/>
        <button data-testid="reset" className="reset" onClick={resetGame}>
          {RESET_BUTTON_TEXT}
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
