import index from './index.css'
import { useState } from 'react';

export default function (props) {

    let color = props.symbol;
    let boardColor = 'isWhite';

    if (color === 1) {
        boardColor = 'isBlack';
    }

    return <div onClick={() => {
        const x = props.x;
        const y = props.y;
        const boardState = props.boardState;
        if (color === 0) {
            boardState[x][y] = 1;
        } else {
            boardState[x][y] = 0;
        }
        props.onClick([...boardState]);
    }}
                class={boardColor}>
    </div>;
}