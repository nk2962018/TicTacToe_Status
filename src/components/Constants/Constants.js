export const Constants = {
    TITLE : "Tic Tac Toe Game",
    NO_OF_TILES_IN_THE_BOARD : 9,
    EMPTY : "",
    Player_X : "X",
    Player_O : "O",
    NEXT_PLAYER_TURN_MESSAGE : 'Next Player : ',
    DECLARE_WINNER_MESSAGE : 'The winner is : ',
    RESET_BUTTON_TEXT : 'Play Again',
    MATCH_DRAW_MESSAGE : 'Match Draw',
    FIRST_ROW_WINNING_POSITION  :  [0,1,2],
    SECOND_ROW_WINNING_POSITION :  [3,4,5],
    THIRD_ROW_WINNING_POSITION  :  [6,7,8],
    FIRST_COL_WINNING_POSITION  :  [0,3,6],
    SECOND_COL_WINNING_POSITION :  [1,4,7],
    THIRD_COL_WINNING_POSITION  :  [2,5,8],
    TOP_LEFT_BOTTOM_RIGHT_DIAGONAL_WINNING_POSITION : [0,4,8],
    TOP_RIGHT_BOTTOM_LEFT_DIAGONAL_WINNING_POSITION : [2,4,6]

}

export const rowWinningPositions = [
    Constants.FIRST_ROW_WINNING_POSITION,
    Constants.SECOND_ROW_WINNING_POSITION,
    Constants.THIRD_ROW_WINNING_POSITION
]

export const columnWinningPositions = [
    Constants.FIRST_COL_WINNING_POSITION,
    Constants.SECOND_COL_WINNING_POSITION,
    Constants.THIRD_COL_WINNING_POSITION
]

export const diagonalWinningPositions = [
    Constants.TOP_LEFT_BOTTOM_RIGHT_DIAGONAL_WINNING_POSITION,
    Constants.TOP_RIGHT_BOTTOM_LEFT_DIAGONAL_WINNING_POSITION
]