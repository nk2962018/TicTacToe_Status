import { Constants } from "./Constants/Constants";
import '../styles/Status.css';

const Status = ({player , winner, board}) => {
    return (
        <div data-testid="status" className="status">
            {
                (() => {
                        if(winner) return ` ${Constants.DECLARE_WINNER_MESSAGE}  ${winner}`
                        else if(board.every(Boolean)) return `${Constants.MATCH_DRAW_MESSAGE}`
                        else return `${Constants.NEXT_PLAYER_TURN_MESSAGE}  ${player}`
                    
                })()
            }
        </div>
    );
};

export default Status;