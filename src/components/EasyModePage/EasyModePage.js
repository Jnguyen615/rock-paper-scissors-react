import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MasterShellImage from '../../images/mastershell.png';
import BananaPeelImage from '../../images/banana.webp';
import LightningImage from '../../images/bolt.webp';

const EasyModePage = ({
  playerScore,
  setPlayerScore,
  cpuScore,
  setCpuScore,
}) => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [cpuChoice, setCpuChoice] = useState(null);
  const [result, setResult] = useState(null);

  const options = [
    { image: MasterShellImage, name: 'MasterShell' },
    { image: BananaPeelImage, name: 'BananaPeel' },
    { image: LightningImage, name: 'Lightning' },
  ];

  const handlePlayerChoice = index => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const cpuIndex = randomIndex;
    const winner = determineWinner(index, cpuIndex);

    if (winner === 'You win!') {
      setPlayerScore(playerScore + 1);
    } else if (winner === 'CPU wins!') {
      setCpuScore(cpuScore + 1);
    }

    setResult(winner);
    setPlayerChoice(options[index]);
    setCpuChoice(options[cpuIndex]);
  };

  const determineWinner = (playerIndex, cpuIndex) => {
    if (playerIndex === cpuIndex) {
      return "It's a tie!";
    } else if (
      (playerIndex === 0 && cpuIndex === 2) ||
      (playerIndex === 1 && cpuIndex === 0) ||
      (playerIndex === 2 && cpuIndex === 1)
    ) {
      return 'You win!';
    } else {
      return 'CPU wins!';
    }
  };
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-row justify-center'>
        <div className='flex items-center relative z-10'>
          {options.map((option, index) => (
            <img
              key={index}
              src={option.image}
              alt={option.name}
              onClick={() => handlePlayerChoice(index)}
              className='w-40 h-auto mr-4 cursor-pointer mx-20'
            />
          ))}
        </div>
      </div>
      {playerChoice && cpuChoice && (
        <div className='mt-4 flex justify-around w-full'>
          <div className='bg-gray-700 opacity-90 p-4 rounded-lg flex items-center relative z-10'>
            <h3 className='mr-2 text-white text-2xl'>Player's Choice:</h3>
            <div className='flex items-center'>
              <img
                src={playerChoice.image}
                alt={playerChoice.name}
                className='w-24 h-auto mr-2'
              />
              <p className='text-white text-2xl'>{playerChoice.name}</p>
            </div>
          </div>
          <div className='bg-gray-700 opacity-90 p-4 rounded-lg flex items-center relative z-10'>
            <h3 className='mr-2 text-white text-2xl'>CPU's Choice:</h3>
            <div className='flex items-center'>
              <img
                src={cpuChoice.image}
                alt={cpuChoice.name}
                className='w-24 h-auto mr-2'
              />
              <p className='text-white text-2xl'>{cpuChoice.name}</p>
            </div>
          </div>
        </div>
      )}
      {result && <h1 className='mt-4 text-4xl text-white'>{result}</h1>}
      <div className='mt-4 flex justify-center'>
        <div className='w-100'>
          {' '}
          {/* Set width to half of the parent container */}
          <div className='bg-gray-800 opacity-90 p-4 rounded-lg mt-4'>
            <h2 className='text-4xl font-bold mb-2 text-white'>Game Rules:</h2>
            <ul className='list-none ml-4 text-white text-2xl'>
              <li>MasterShell > Lightning</li>
              <li>BananaPeel > MasterShell</li>
              <li>Lightning > BananaPeel</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mt-4 flex justify-center'>
        <Link
          to='/'
          className='bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-4 relative z-10'>
          Back to Main
        </Link>
      </div>
    </div>
  );
};

export default EasyModePage;
