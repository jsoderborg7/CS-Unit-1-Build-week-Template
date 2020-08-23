  
import React, { useEffect, useContext } from 'react'
import stamps from '../utilities/cellstamps'
import {CellStampContext} from '../context/CellStampContext'
import {GameRunningContext} from '../context/GameRunningContext'
import {GameSpeedContext} from '../context/GameSpeedContext'
import {GameStateContext} from '../context/GameStateContext'

const Options = () => {

    const {cellStamp, setCellStamp} = useContext(CellStampContext)
    const {gameRunning, setGameRunning} = useContext(GameRunningContext)
    const {gameSpeed, setGameSpeed} = useContext(GameSpeedContext)
    const {gameState, setGameState} = useContext(GameStateContext)
    
    let timeout = null;
    
    useEffect(() => {
        if(gameRunning){
            timeout = setTimeout(() => {
                gameLoop()
            }, gameSpeed)
        }
    },
    [gameState, gameRunning])
    const startGame = event => {
        event.preventDefault();
        setGameRunning(true)
    }
    const stopGame = event => {
        event.preventDefault();
        clearTimeout(timeout)
        setGameRunning(false)
    }
    const clearGame = event => {
        event.preventDefault();
        const size = gameState.gridSize;
        setGameRunning(false);
        clearTimeout(timeout)
        setGameState({
            ...gameState,
            'cellLife': new Array(size * size).fill(false),
            'generation': 0
        })
        notStamping() 
    }
    const changeSpeed = event => {
        event.preventDefault();
        const speed = event.target.value
        setGameSpeed(speed)
    }
    const switchStamp = event => {
        event.preventDefault();
        const index = event.target.value;
        if(!index){
            setCellStamp(false)
        } else {
            setCellStamp(stamps[index])
        }
    }
    const cancelStamp = event => {
        event.preventDefault();
        notStamping()
    }
    const notStamping = () => {
        setCellStamp(false)
        const dropdown = document.getElementById("stamps")
        dropdown.value = dropdown[0].value
    }
    const step = () => {
        if(!gameRunning) {
            gameLoop()
        }
    }
    const gameLoop = () => {
        const curArr = gameState.cellLife
        const size = gameState.gridSize
        const newArr = curArr.map((cell, index) => {
            let neighbors = 0
            if (index >= size) {
                if (index % size !== 0) {
                    if (curArr[index - size - 1]) {
                        neighbors += 1
                    }
                }
                if (curArr[index - size]) {
                    neighbors += 1
                }
                if (index % size !== size - 1) {
                    if (curArr[index - size + 1]) {
                        neighbors += 1
                    }
                }
            }
            if (index % size !== 0) {
                if (curArr[index - 1]) {
                    neighbors += 1
                }
            }
            if (index % size !== size - 1) {
                if (curArr[index + 1]) {
                    neighbors += 1
                }
            }
            if (index < size * (size - 1)) {
                if (index % size !== 0) {
                    if (curArr[index + size - 1]){
                        neighbors += 1
                    }
                }
                if(curArr[index + size]) {
                    neighbors += 1
                }
                if (index % size !== size - 1) {
                    if (curArr[index + size + 1]) {
                        neighbors += 1
                    }
                }
            }
            if (neighbors > 3) {
                return false;
            } else if (curArr[index] === false) {
                if (neighbors === 3) {
                    return true;
                } else {
                    return false;
                }
            } else if (neighbors > 1) {
                return true;
            } else {
                return false;
            }
        })
        setGameState({
            ...gameState,
            'cellLife': newArr,
            'generation': gameState.generation + 1
        })

    }
    const sum = gameState.cellLife.reduce((a, b) => a + b, 0)
    return(
        <div className="optionBox">
            {gameRunning ? 
            <button className="inactiveButton" onClick={startGame}>Start Game</button> :
            <button onClick={startGame}>Start Game</button>
            }
            {gameRunning ? 
            <button onClick={stopGame}>Stop</button> :
            <button className="inactiveButton" onClick={stopGame}>Stop</button>
            }
            {sum === 0 ? 
            <button className="inactiveButton" onClick={clearGame}>Clear</button>: 
            <button onClick={clearGame}>Clear</button>
            } 
            {gameRunning ? 
            <button className="inactiveButton" onClick={step}>Step by Step</button> :
            <button onClick={step}>Step by Step</button>
            }
            <p>Cell Stamps:</p>
            <select name="stamps" id="stamps" onChange={switchStamp}>
                <option value={false}>None</option>
                {stamps.map((stamp, index) => {
                    return <option value={index}>{stamp.name}</option>
                })}
            </select>
            {cellStamp ?
            <button onClick={cancelStamp}>Cancel</button> :
            <button className="inactiveButton" onClick={cancelStamp}>Cancel</button>
            }
            <p>Game Speed:</p>
            <select name="speeds" id="speeds" onChange={changeSpeed}>
                <option value="1000">1 frame per second</option>
                <option value="500">2 frames per second</option>
                <option value="-4000">Really Fast!!!</option>
            </select>
        </div>
    )
}

export default Options