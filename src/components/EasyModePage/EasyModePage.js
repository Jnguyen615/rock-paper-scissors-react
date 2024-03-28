// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import MasterShellImage from '../../images/mastershell.png';
// import BananaPeelImage from '../../images/banana.webp';
// import LightningImage from '../../images/bolt.webp';

// const EasyModePage = ({
//   playerScore,
//   setPlayerScore,
//   cpuScore,
//   setCpuScore,
// }) => {
//   const [playerChoice, setPlayerChoice] = useState(null);
//   const [cpuChoice, setCpuChoice] = useState(null);
//   const [result, setResult] = useState(null);

//   const options = [
//     { image: MasterShellImage, name: 'MasterShell' },
//     { image: BananaPeelImage, name: 'BananaPeel' },
//     { image: LightningImage, name: 'Lightning' },
//   ];

//   const handlePlayerChoice = index => {
//     const randomIndex = Math.floor(Math.random() * options.length);
//     const cpuIndex = randomIndex;
//     const winner = determineWinner(index, cpuIndex);

//     if (winner === 'You win!') {
//       setPlayerScore(playerScore + 1);
//     } else if (winner === 'CPU wins!') {
//       setCpuScore(cpuScore + 1);
//     }

//     setResult(winner);
//     setPlayerChoice(options[index]);
//     setCpuChoice(options[cpuIndex]);
//   };

//   const determineWinner = (playerIndex, cpuIndex) => {
//     if (playerIndex === cpuIndex) {
//       return "It's a tie!";
//     } else if (
//       (playerIndex === 0 && cpuIndex === 2) ||
//       (playerIndex === 1 && cpuIndex === 0) ||
//       (playerIndex === 2 && cpuIndex === 1)
//     ) {
//       return 'You win!';
//     } else {
//       return 'CPU wins!';
//     }
//   };

//   const resetScores = () => {
//     setPlayerScore(0)
//     setCpuScore(0)
//   }

//   return (
//     <div className='flex flex-col items-center'>
//       <div className='flex flex-row justify-center'>
//         <div className='flex items-center relative z-10'>
//           {options.map((option, index) => (
//             <img
//               key={index}
//               src={option.image}
//               alt={option.name}
//               onClick={() => handlePlayerChoice(index)}
//               className='w-20 sm:w-40 mr-4 cursor-pointer mx-12 sm:mx-24'
//               />
//           ))}
//         </div>
//       </div>
//       {playerChoice && cpuChoice && (
//         <div className='mt-4 flex justify-around w-full'>
//           <div className='bg-gray-700 opacity-90 p-4 rounded-lg flex items-center relative z-10'>
//             <h3 className='mr-2 text-white text-3xl'>Player's Choice:</h3>
//             <div className='flex items-center'>
//               <img
//                 src={playerChoice.image}
//                 alt={playerChoice.name}
//                 className='w-20 sm:w-24 h-auto mr-2'
//               />
//             </div>
//           </div>
//           <div className='bg-gray-700 opacity-90 p-4 rounded-lg flex items-center relative z-10'>
//             <h3 className='mr-2 text-white text-3xl'>CPU's Choice:</h3>
//             <div className='flex items-center'>
//               <img
//                 src={cpuChoice.image}
//                 alt={cpuChoice.name}
//                 className='w-20 sm:w-24 h-auto mr-2'
//               />
//             </div>
//           </div>
//         </div>
//       )}
//       {result && <h1 className='mb-10 text-6xl text-white relative z-10'>{result}</h1>}
//       <div className='mt-4 flex justify-center'>
//         <div className='w-full sm:w-auto'>
//           <div className='bg-gray-800 opacity-90 p-4 rounded-lg mt-4'>
//             <h2 className='text-3xl sm:text-4xl font-bold mb-2 text-white text-center'>Game Rules:</h2>
//             <ul className='list-none ml-4 text-white text-2xl sm:text-3xl'>
//               <li>MasterShell &gt; Lightning</li>
//               <li>BananaPeel &gt; MasterShell</li>
//               <li>Lightning &gt; BananaPeel</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className='mt-4 flex justify-center'>
//         <button
//           onClick={resetScores}
//           className='bg-gray-700 hover:bg-gray-500 opacity-90 text-white text-xl sm:text-3xl font-bold py-2 px-4 rounded mr-4 relative z-10'>
//           Reset Scores
//         </button>
//         <Link
//           to='/'
//           className='bg-gray-700 hover:bg-gray-500 text-white text-xl sm:text-3xl font-bold py-2 px-4 rounded mr-4 relative z-10'>
//           Back to Main
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default EasyModePage;

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

  const resetScores = () => {
    setPlayerScore(0)
    setCpuScore(0)
  }

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
              className='w-20 sm:w-40 mr-4 cursor-pointer mx-12 sm:mx-24'
              />
          ))}
        </div>
      </div>
      {playerChoice && cpuChoice && (
        <div className='mt-4 flex justify-around w-full'>
          <div className='bg-gray-700 opacity-90 p-4 rounded-lg flex items-center relative z-10'>
            <h3 className='mr-2 text-white text-3xl'>Player's Choice:</h3>
            <div className='flex items-center'>
              <img
                src={playerChoice.image}
                alt={playerChoice.name}
                className='w-20 sm:w-24 h-auto mr-2'
              />
            </div>
          </div>
          <div className='bg-gray-700 opacity-90 p-4 rounded-lg flex items-center relative z-10'>
            <h3 className='mr-2 text-white text-3xl'>CPU's Choice:</h3>
            <div className='flex items-center ml-4 sm:ml-8'> {/* Adjusted margin for smaller screens */}
              <img
                src={cpuChoice.image}
                alt={cpuChoice.name}
                className='w-20 sm:w-24 h-auto mr-2'
              />
            </div>
          </div>
        </div>
      )}
      {result && <h1 className='mb-10 text-6xl text-white relative z-10'>{result}</h1>}
      <div className='mt-4 flex justify-center'>
        <div className='w-full sm:w-auto'>
          <div className='bg-gray-800 opacity-90 p-4 rounded-lg mt-4'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-2 text-white text-center'>Game Rules:</h2>
            <ul className='list-none ml-4 text-white text-2xl sm:text-3xl'>
              <li>MasterShell &gt; Lightning</li>
              <li>BananaPeel &gt; MasterShell</li>
              <li>Lightning &gt; BananaPeel</li>
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

export default EasyModePage;
