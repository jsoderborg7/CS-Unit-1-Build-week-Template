  
import React, { useEffect, useContext } from 'react'

import {CellStampContext} from '../context/CellStampContext'
import {GameColorContext} from '../context/GameColorContext'
import {GameRunningContext} from '../context/GameRunningContext'
import {GameStateContext} from '../context/GameStateContext'

const Grid = () => {

    const {cellStamp} = useContext(CellStampContext)
    const {gameColor} = useContext(GameColorContext)
    const {gameRunning} = useContext(GameRunningContext)
    const {gameState, setGameState} = useContext(GameStateContext)

    const gridSize = gameState.gridSize;
    const cellSize = gameState.cellSize;
    const gridLength = gridSize * cellSize;

    useEffect(() => {
        const myCanvas = document.getElementById("game-canvas");
        const ctx = myCanvas.getContext("2d");
        ctx.clearRect(0,0, gridLength, gridLength)
        let x = 0;
        let y = 0;
        ctx.strokeStyle = 'grey'
        while (x < gridLength) {
            x += cellSize;
            ctx.moveTo(x, 0);
            ctx.lineTo(x, gridLength);
            ctx.stroke();
        }
        while (y < gridLength) {
            y += cellSize;
            ctx.moveTo(0, y)
            ctx.lineTo(gridLength, y);
            ctx.stroke();
        }
        for (let i = 0; i < gameState.cellLife.length ; i++) {
            if (gameState.cellLife[i]) {
                const tlX = (i % gridSize) * cellSize;
                const tlY = (Math.floor(i / gridSize)) * cellSize;
                let myRandom = Math.floor(Math.random() * gameColor.length) 
                ctx.fillStyle = gameColor[myRandom]
                ctx.fillRect(tlX, tlY, cellSize, cellSize)
            }
        }
    }, [gameState])
    const clickCell = event => {
        event.preventDefault();
        if (gameRunning) {
            return null
        }
        const myCanvas = document.getElementById("game-canvas");
        const myRect = myCanvas.getBoundingClientRect();
        const offsetX = myRect.x;
        const offsetY = myRect.y;
        const clickX = event.clientX;
        const clickY = event.clientY;
        const pixelX = clickX - offsetX
        const pixelY = clickY - offsetY
        const x = Math.floor(pixelX / cellSize)
        const y = Math.floor(pixelY / cellSize)
        const arrIndex = x + y * gridSize
        if (!cellStamp) {
            const newArr = gameState.cellLife;
            newArr[arrIndex] = !newArr[arrIndex];
            setGameState({
                ...gameState,
                'cellLife': newArr
            })
        } else {
            const height = cellStamp.height
            const width = cellStamp.width
            const stampMap = cellStamp.map
            if (arrIndex + (height - 1) * gridSize > gameState.cellLife.length || arrIndex % gridSize + width > gridSize) {
                alert(`Stamp is too big to place here!`)
            } else {
                const newArr = gameState.cellLife;
                for (let i = 0; i < stampMap.length; i++) {
                    const indexToMod = arrIndex + (i % width) + (Math.floor(i / width) * gridSize);
                    newArr[indexToMod] = stampMap[i]
                }
                setGameState({
                    ...gameState,
                    'cellLife': newArr
                })
            }
        } 
    }
    return(
        <>
        <h3>Generation: {gameState.generation} </h3>
        <canvas className="grid" id="game-canvas" width={gridLength} height={gridLength} onClick={clickCell} />     
        </>
    )
}
export default Grid