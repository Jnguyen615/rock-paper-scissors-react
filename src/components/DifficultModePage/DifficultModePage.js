import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MasterShellImage from '../../images/mastershell.png';
import BananaPeelImage from '../../images/banana.webp';
import LightningImage from '../../images/bolt.webp';
import MushroomImage from '../../images/mushroom.png';
import BulletImage from '../../images/bullet.webp';

const DifficultModePage = ({
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
    { image: MushroomImage, name: 'Mushroom' },
    { image: BulletImage, name: 'Bullet' },
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
      (playerIndex === 2 && cpuIndex === 1) ||
      (playerIndex === 3 && (cpuIndex === 1 || cpuIndex === 4)) ||
      (playerIndex === 4 && (cpuIndex === 0 || cpuIndex === 2))
    ) {
      return 'You win!';
    } else {
      return 'CPU wins!';
    }
  };

  const resetScores = () => {
    setPlayerScore(0);
    setCpuScore(0);
  };

  return (
    <div className='flex flex-col items-center overflow-x-hidden'>
      <div className='flex flex-row justify-center overflow-x-auto'>
        <div className='flex items-center relative z-10'>
          {options.map((option, index) => (
            <img
              key={index}
              src={option.image}
              alt={option.name}
              onClick={() => handlePlayerChoice(index)}
              className='w-16 h-16 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-32 lg:h-32 mr-2 sm:mx-6 md:mx-12 bg-gray-700 opacity-90 rounded-lg mb-10 mt-20'
            />
          ))}
        </div>
      </div>
      {playerChoice && cpuChoice && (
        <div className='mt-4 flex justify-around w-full overflow-x-auto'>
          <div className='bg-gray-700 opacity-90 p-4 rounded-lg flex items-center relative z-10'>
            <h3 className='mr-2 text-white sm:text-lg md:text-xl lg:text-4xl'>
              Player's Choice:
            </h3>
            <div className='flex items-center justify-center'>
              <img
                src={playerChoice.image}
                alt={playerChoice.name}
                className='w-16 h-16 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 mr-2 mx-3 sm:mx-6 md:mx-12'
              />
            </div>
          </div>
          <div className='bg-gray-700 opacity-90 p-4 rounded-lg flex items-center relative z-10'>
            <h3 className='mr-2 text-white sm:text-lg md:text-xl lg:text-4xl'>
              CPU's Choice:
            </h3>
            <div className='flex items-center ml-4 sm:ml-8'>
              <img
                src={cpuChoice.image}
                alt={cpuChoice.name}
                className='w-16 h-16 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 mr-2 mx-3 sm:mx-6 md:mx-12'
              />
            </div>
          </div>
        </div>
      )}
      {result && (
        <h1 className='mb-10 text-6xl text-white relative z-10'>{result}</h1>
      )}
      <div className='mt-4 flex justify-center'>
        <div className='w-full sm:w-auto pt-0'>
          <div className='max-w-lg mx-auto p-4 bg-gray-800 rounded-lg'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-2 text-white text-center'>
              Game Rules:
            </h2>
            <ul className='list-none ml-2 text-white text-base sm:text-lg md:text-xl lg:text-4xl mt-2'>
              <li>MasterShell &gt; Lightning</li>
              <li>BananaPeel &gt; MasterShell</li>
              <li>Lightning &gt; BananaPeel</li>
              <li>Mushroom &gt; BananaPeel &amp; Bullet</li>
              <li>Bullet &gt; Lightning &amp; MasterShell</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mt-4 flex justify-center'>
        <button
          onClick={resetScores}
          className='bg-gray-700 hover:bg-gray-500 opacity-90 text-white text-xl sm:text-3xl font-bold py-2 px-4 rounded mr-4 relative z-10'>
          Reset Scores
        </button>
        <Link
          to='/'
          className='bg-gray-700 hover:bg-gray-500 text-white text-xl sm:text-3xl font-bold py-2 px-4 rounded mr-4 relative z-10'>
          Back to Main
        </Link>
      </div>
    </div>
  );
};

export default DifficultModePage;
