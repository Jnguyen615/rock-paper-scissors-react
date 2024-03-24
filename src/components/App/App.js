import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CPU from '../CPU/CPU';
import GameSelect from '../GameSelect/GameSelect';
import Header from '../Header/Header';
import Player from '../Player/Player';
import EasyModePage from '../EasyModePage/EasyModePage';
import DifficultModePage from '../DifficultModePage/DifficultModePage';
import './App.css';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className='App flex flex-col'>
        <Header />
        <div className='flex-grow'></div>
        <div className='flex justify-between'>
          <Player
            className='order-1 flex-grow'
            score={score}
            setScore={setScore}
            />
          <div className='order-2 flex justify-end'>
            <CPU setScore={setScore} score={score} />
          </div>
        </div>
        <div className='game-select'>
          <Routes> {/* Use Routes instead of Router */}
            <Route path='/' element={<GameSelect />} />
            <Route path='/easy' element={<EasyModePage />} />
            <Route path='/difficult' element={<DifficultModePage />} />
          </Routes>
        </div>
     
    </div>
  );
}

export default App;
