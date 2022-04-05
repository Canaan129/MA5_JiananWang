import Square from './Square';
import index from './index.css';
import React, { useState } from 'react';

export default function () {
    const [board, setBoard] = useState([
        [0, 0],
        [0, 0],
    ])

    const boardComponent = [];

    for (let i = 0; i < board.length; i++) {
        let row = board[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Square symbol={board[i][j]}
                                         onClick={setBoard} boardState={board} x={i} y={j} />))
        }
    }

    let count = board[0][0] + board[0][1] + board[1][0] + board[1][1];

    return <div className="wholeThing">
        <div>
            <h1>Count: {count}</h1>
        </div>
        <div className="colorBoard">
            {boardComponent}
        </div>
    </div>
}