import './square.css';
import Single from './single';
import { useEffect, useState } from 'react';

export default function Grid () {
    const[start,setStart] = useState("Start");
    const [flag,setFlag] = useState(0);
    let [square,setSquare] = useState(Array(9).fill(null));
    let [wn,setWn]=useState(0);
    const [wn1,setWn1] = useState('Click on Start');

    useEffect(() => {
        if(wn == 1 || wn == 2) {
            if(wn == 1) {
                setWn1(`Winner is Player : 1`);
             } else {
                setWn1(`Winner is Player : 2`);
                // setStart(`Play Again`);
            }
        } else {
            if(wn == -1) {
                setWn(0);
                setWn1(`Click on Start`);
            }
        }
    },[wn,wn1])

    function HandleReset() {
        setSquare(Array(9).fill(null));
        setWn(-1);
        setWn1(`Click on Start`);
    }

    function handleStart () {
        if(wn1 == "Click on Start") {
            setWn1(`Turn : Player 1`);
        }
    }
    function handleChange(i) {
        if(wn == 1 || wn == 2) {
            console.log(wn,wn1);
            if(wn == 1) {
                setWn1(`Winner is Player : 1`);
            } else {
                setWn1(`Winner is Player : 2`);
            }
        }
        if((wn == 0) && ((wn1 == "Turn : Player 1") || (wn1 == "Turn : Player 2"))) {
            if(!flag) {
                if(square[i] == null) {
                    if(wn1 == "Turn : Player 1") {
                        setWn1(`Turn : Player 2`);
                    } 
                    square[i] = 'X';
                    setSquare(square);    
                    let grid = [[square[0],square[3],square[6]],
                                [square[1],square[4],square[7]],
                                [square[2],square[5],square[8]]];
                    console.log(grid);
                    for(let i = 0; i < 3; ++i) {
                        if((grid[i][0] == 'X' && grid[i][1] == 'X') && (grid[i][1] == 'X' && grid[i][2] == 'X')) {
                            setWn(1);
                        }
                        if((grid[0][i] == 'X' && grid[1][i] == 'X') && (grid[1][i] == 'X' && grid[2][i] == 'X')) {
                            setWn(1);
                        }
                    }
                    if(grid[0][0] == 'X' && grid[1][1] == 'X' && grid[2][2] == 'X') {
                        setWn(1);
                       
                    }
                    if((grid[0][2] == 'X' && grid[1][1] == 'X') && (grid[1][1] == 'X' && grid[2][0] == 'X')) {
                        setWn(1);                      
                    }
                    setFlag(1);
                    let cnt = 0;
                    for(let i = 0; i < 3; ++i) {
                        for(let j = 0; j < 3; ++j) {
                            if(grid[i][j] == 'X' || grid[i][j] == 'O') {
                                cnt++;
                            }
                        }
                    }
                    if(cnt == 9) {
                        if(wn == 0) {
                            setWn1(`Draw`);
                        }
                    }
                }
            } else {
                if(square[i] == null) {
                    if(wn1 == "Turn : Player 2") {
                        setWn1(`Turn : Player 1`);
                    }  
                    if(square[i] == null) {
                        square[i] = 'O';
                        setSquare(square);    
                        let grid = [[square[0],square[3],square[6]],
                                    [square[1],square[4],square[7]],
                                    [square[2],square[5],square[8]]];
                        console.log(grid);
                        for(let i = 0; i < 3; ++i) {
                            if((grid[i][0] == 'O' && grid[i][1] == 'O') && (grid[i][1] == 'O' && grid[i][2] == 'O')) {
                                setWn(2);
                            }
                            if((grid[0][i] == 'O' && grid[1][i] == 'O') && (grid[1][i] == 'O' && grid[2][i] == 'O')) {
                                setWn(2);
                            }
                        }
                        if((grid[0][0] == 'O' && grid[1][1] == 'O') && (grid[1][1] == 'O' && grid[2][2] == 'O')) {
                            setWn(2);
                        }
                        if((grid[0][2] == 'O' && grid[1][1] == 'O') && (grid[1][1] == 'O' && grid[2][0] == 'O')) {
                            setWn(2);
                        }
                        setFlag(0); 
                        let cnt = 0;
                        for(let i = 0; i < 3; ++i) {
                            for(let j = 0; j < 3; ++j) {
                                if(grid[i][j] == 'X' || grid[i][j] == 'O') {
                                    cnt++;
                                }
                            }
                        }
                        if(cnt == 9) {
                            if(wn == 0) {
                                setWn1(`Draw`);
                            }
                        }
                    }      
                }
            }
        } else {
            console.log(wn1);
            if(((wn1 == "Turn : Player 1") || (wn1 == "Turn : Player 2"))) {
                if(square[i] == 'X') {
                    square[i] = 'X';
                    setSquare(square);
                } else if (square[i] == 'O') {
                    square[i] = 'O';
                    setSquare(square);
                } else {
                    square[i] = ' ';
                    setSquare(square);
                }
            } 
        }
    }

    return (
        <div id = "div1">
            <div id = "mn_div1">
                <Single val = {square[0]} onSquareClick = {() => handleChange(0)}/>
                <Single val = {square[1]} onSquareClick = {() => handleChange(1)}/>
                <Single val = {square[2]} onSquareClick = {() => handleChange(2)}/>
            </div>
            <div id = "mn_div2">
                <Single val = {square[3]} onSquareClick = {() => handleChange(3)}/>
                <Single val = {square[4]} onSquareClick = {() => handleChange(4)}/>
                <Single val = {square[5]} onSquareClick = {() => handleChange(5)}/>
            </div>
            <div id = "mn_div3">
                <Single val = {square[6]} onSquareClick = {() => handleChange(6)}/>
                <Single val = {square[7]} onSquareClick = {() => handleChange(7)}/>
                <Single val = {square[8]} onSquareClick = {() => handleChange(8)}/>
            </div>
            <div id = "mn_div4">
                <div id = "in2">
                    <h1 id = "h1"> {wn1} </h1>
                </div>
                <div id ="in">
                    <button id = "btn2" onClick={handleStart}>{start}</button>
                    <button id = "btn1" onClick={HandleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
}
