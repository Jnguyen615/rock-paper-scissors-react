import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CPU from '../CPU/CPU';
import GameSelect from '../GameSelect/GameSelect';
import Header from '../Header/Header';
import Player from '../Player/Player';
import EasyModePage from '../EasyModePage/EasyModePage';
import DifficultModePage from '../DifficultModePage/DifficultModePage';
import MarioKart from '../../images/mario-kart.jpeg';

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='absolute inset-0 bg-black opacity-50'></div>{' '}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url(${MarioKart})`,
          height: '110%',
          backgroundAttachment: 'fixed',
        }}>
        <Header />
        <div className='flex-grow'></div>
        <div className='flex justify-between'>
          <Player className='order-1 flex-grow' playerScore={playerScore} />
          <div className='order-2 flex justify-end'>
            <CPU cpuScore={cpuScore} />
          </div>
        </div>
        <div className='game-select' style={{ marginTop: '-10vh' }}>
          <Routes>
            <Route path='/' element={<GameSelect />} />
            <Route
              path='/easy'
              element={
                <EasyModePage
                  playerScore={playerScore}
                  setPlayerScore={setPlayerScore}
                  cpuScore={cpuScore}
                  setCpuScore={setCpuScore}
                />
              }
            />
            <Route
              path='/difficult'
              element={
                <DifficultModePage
                  playerScore={playerScore}
                  setPlayerScore={setPlayerScore}
                  cpuScore={cpuScore}
                  setCpuScore={setCpuScore}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
