import Koopa from '../../images/redkoopa.png';

const Player = ({ playerScore }) => {
  return (
    <main>
      <div className="bg-gray-800 bg-opacity-90 rounded-lg p-4 w-32 mx-auto text-center relative z-10 ml-4">
        <img src={Koopa} alt='koopa' className="w-24 h-auto" />
        <p className='text-white text-2xl'>Score: {playerScore}</p>
      </div>
    </main>
  );
};

export default Player;
