
import React, {useState} from 'react';
import './App.css';

import Header from './components/header';
import Game from './components/game';

import { CellStampContext } from './context/CellStampContext';
import { GameColorContext } from './context/GameColorContext';
import { GameRunningContext } from './context/GameRunningContext';
import { GameSpeedContext } from './context/GameSpeedContext';
import { GameStateContext } from './context/GameStateContext';

function App() {

  const start = {
    'gridSize': 25,
    'cellSize': 20,
    'cellLife': new Array(25 * 25).fill(false),
    'generation': 0
  }
  const [cellStamp, setCellStamp] = useState(false)
  const [gameColor, setGameColor] = useState("#00000")
  const [gameRunning, setGameRunning] = useState(false)
  const [gameSpeed, setGameSpeed] = useState(1000)
  const [gameState, setGameState] = useState(start)



  return (
    <div className="App">
      <CellStampContext.Provider value={{cellStamp, setCellStamp}}>
        <GameColorContext.Provider value={{gameColor, setGameColor}}>
          <GameRunningContext.Provider value={{gameRunning, setGameRunning}}>
            <GameSpeedContext.Provider value={{gameSpeed, setGameSpeed}}>
              <GameStateContext.Provider value={{gameState, setGameState}}>
                <Header />
                <Game />
              </GameStateContext.Provider>
            </GameSpeedContext.Provider>
          </GameRunningContext.Provider>
        </GameColorContext.Provider>
      </CellStampContext.Provider>
    </div>
  );
}

export default App;
