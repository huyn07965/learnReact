import React from 'react';
import Cell from './Cell';
import './style.css';


const Board = (props) => {
    // const cells = [null, null, null, 'X', 'X', 'X', null, null, null];
    // console.log(winer(cells))
    return (
        <div className='game-board'>
            {props.cells.map((item, index) => (
                <Cell
                    key={index}
                    value={item}
                    onClick={() => props.onClick(index)}
                    className={item === 'X' ? 'isX' : item === 'O' ? 'isO' : ''}
                ></Cell>
            ))}
        </div>
    );
};

export default Board;