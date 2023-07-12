import './single.css';
import {useState} from 'react';

export default function S({val,onSquareClick}) {
    const[value, setValue] = useState({val});

    return (
        <div id = "div1">
            <button id = "div2" onClick={onSquareClick}>{val}</button>
        </div>
    );
}
