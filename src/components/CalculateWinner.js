import { Constants } from "./Constants/Constants";

const CalculateWinner = (tiles) => {
    const {
        FIRST_ROW_WINNING_POSITION,
        SECOND_ROW_WINNING_POSITION,
        THIRD_ROW_WINNING_POSITION,
        FIRST_COL_WINNING_POSITION,
        SECOND_COL_WINNING_POSITION,
        THIRD_COL_WINNING_POSITION,
        TOP_LEFT_BOTTOM_RIGHT_DIAGONAL_WINNING_POSITION,
        TOP_RIGHT_BOTTOM_LEFT_DIAGONAL_WINNING_POSITION

    } = Constants

    const winningMoves = [
        FIRST_ROW_WINNING_POSITION,
        SECOND_ROW_WINNING_POSITION,
        THIRD_ROW_WINNING_POSITION,
        FIRST_COL_WINNING_POSITION,
        SECOND_COL_WINNING_POSITION,
        THIRD_COL_WINNING_POSITION,
        TOP_LEFT_BOTTOM_RIGHT_DIAGONAL_WINNING_POSITION,
        TOP_RIGHT_BOTTOM_LEFT_DIAGONAL_WINNING_POSITION
    ];

    for(let i=0;i<winningMoves.length;i++){
        const [winIndex1,winIndex2,winIndex3] = winningMoves[i];
        if(tiles[winIndex1] && tiles[winIndex1] === tiles[winIndex2] && tiles[winIndex1] === tiles[winIndex3]){
           return tiles[winIndex1];
        }
    }
    return null;
}

export default CalculateWinner;