import React, { useReducer } from 'react';
import { calculateWinner } from '../../helper';
import Board from './Board';
import './style.css'

const initialState = ({
    board: Array(9).fill(null),
    xIsNext: true,
})

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'Click':
            {
                const { board, xIsNext } = state;
                const { winner, index } = action.payload;
                if (winner || board[index]) return state;
                const nextState = JSON.parse(JSON.stringify(state));
                nextState.board[index] = xIsNext ? 'X' : 'O';
                nextState.xIsNext = !xIsNext;

                return nextState;
            }
        case 'reset':
            {
                const nextState = JSON.parse(JSON.stringify(state));
                nextState.board = Array(9).fill(null);
                nextState.xIsNext = true;
                return nextState;
            }

        default:
            break;
    }
    return state;
}

const Tictactoe = () => {
    // const [board, setBoard] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(true);

    const [state, dispatch] = useReducer(gameReducer, initialState);

    // const [state, setStae] = useState({
    //     board: Array(9).fill(null),
    //     xIsNext: true,
    //     name: 'Nguyễn Gia Huy'
    // })

    const winner = calculateWinner(state.board);

    const handleClick = (index) => {
        // const boardCopy = [...state.board];
        // if (winner || boardCopy[index]) return;
        dispatch({
            type: 'Click',
            payload: {
                // index: index : cách 1
                index,
                winner,
            }
        })

        // boardCopy[index] = state.xIsNext ? 'X' : 'O';
        // setBoard(boardCopy);
        // setXIsNext(!xIsNext);
        // setStae({
        //     ...state,
        //     board: boardCopy,
        //     xIsNext: !state.xIsNext
        // })
    };

    const handleReset = () => {
        // setBoard(Array(9).fill(null))
        // setXIsNext(true)
        // setStae({
        //     board: Array(9).fill(null),
        //     xIsNext: true
        // })

        dispatch({
            type: 'reset',
        })
    }

    return (
        <div>
            <Board cells={state.board} onClick={handleClick}></Board>
            <b className='textWin'>{winner ? `Winner is ${!state.xIsNext ? 'X' : 'O'}` : ""}<br></br></b>
            <button className="resetGame" onClick={handleReset}>Reset Game</button>
        </div>
    );
};

export default Tictactoe;