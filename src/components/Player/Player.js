import Koopa from '../../images/redkoopa.png';

const Player = ({ playerScore }) => {
  return (
    <main>
      <div className='bg-gray-800 bg-opacity-90 rounded-lg p-2 sm:p-4 md:p-6 w-24 sm:w-32 md:w-48 mx-auto text-center relative z-10 ml-4'>
        <img src={Koopa} alt='koopa' className='w-full h-auto sm:w-3/4 md:w-full' />
        <p className='text-white text-sm sm:text-xl md:text-3xl'>
          Score: {playerScore}
        </p>
      </div>
    </main>
  );
};

export default Player;
