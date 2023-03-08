import React from 'react';
import './style.css'

const Cell = ({ value, onClick, className }) => {
    return (
        <div className={`game-cell ${className}`} onClick={onClick}>
            {value}
        </div>
    );
};

export default Cell;