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

  const options = [
    { name: 'MasterShell', image: MasterShellImage },
    { name: 'BananaPeel', image: BananaPeelImage },
    { name: 'Lightning', image: LightningImage },
    { name: 'Mushroom', image: MushroomImage },
    { name: 'Bullet', image: BulletImage },
  ];

  const handlePlayerChoice = index => {
    const randomIndex = Math.floor(Math.random() * options.length);
    // const cpuChoice = randomIndex;
    setPlayerChoice(options[index]);
    setCpuChoice(options[randomIndex]);
    const result = determineWinner(options[index], options[randomIndex]);
    if (result === 'You win!') {
      setPlayerScore(playerScore + 1);
    } else if (result === 'CPU wins!') {
      setCpuScore(cpuScore + 1);
    }
  };

  const determineWinner = (playerChoice, cpuChoice) => {
    if (playerChoice === null || cpuChoice === null) {
      return '';
    }

    const rules = {
      MasterShell: ['Lightning', 'Mushroom'],
      BananaPeel: ['MasterShell', 'Bullet'],
      Lightning: ['BananaPeel', 'Mushroom'],
      Mushroom: ['BananaPeel', 'Bullet'],
      Bullet: ['Lightning', 'MasterShell'],
    };

    const playerChoiceName = playerChoice.name;
    const cpuChoiceName = cpuChoice.name;

    if (playerChoiceName === cpuChoiceName) {
      return "It's a tie!";
    } else if (rules[playerChoiceName].includes(cpuChoiceName)) {
      return 'You win!';
    } else {
      return 'CPU wins!';
    }
  };

  const resetScores = () => {
    setPlayerScore(0)
    setCpuScore(0)
  };

  const result = determineWinner(playerChoice, cpuChoice);

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
      <div className='mt-4 flex justify-around w-full'>
        {playerChoice !== null && (
          <div className='bg-gray-700 opacity-90 p-4 rounded-lg flex items-center relative z-10'>
            <h3 className='mr-2 text-white text-3xl'>Player's Choice:</h3>
            <div className='flex items-center'>
              <img
                src={playerChoice.image}
                alt={playerChoice.name}
                className='w-24 h-auto mr-2'
              />
            </div>
          </div>
        )}
        {cpuChoice !== null && (
          <div className='bg-gray-700 opacity-90 p-4 rounded-lg flex items-center relative z-10'>
            <h3 className='mr-2 text-white text-3xl'>CPU's Choice:</h3>
            <div className='flex items-center'>
              <img
                src={cpuChoice.image}
                alt={cpuChoice.name}
                className='w-24 h-auto mr-2'
              />
            </div>
          </div>
        )}
      </div>

      <h1 className='mt-4 text-white relative z-10 text-6xl'>{result}</h1>
      <div className='mt-4 flex justify-center'>
        <div className='w-100'>
          <div className='bg-gray-800 opacity-90 p-4 rounded-lg mt-4'>
            <h2 className='text-4xl font-bold mb-2 text-white'>Game Rules:</h2>
            <ul className='list-none ml-4 text-white text-4xl'>
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
          className='bg-gray-700 hover:bg-gray-500 opacity-90 text-white text-3xl font-bold py-2 px-4 rounded mr-4 relative z-10'>
          Reset Scores
        </button>
        <Link
          to='/'
          className='bg-gray-700 hover:bg-gray-500 text-white text-3xl font-bold py-2 px-4 rounded mr-4 relative z-10'>
          Back to Main
        </Link>
      </div>
    </div>
  );
};

export default DifficultModePage;
