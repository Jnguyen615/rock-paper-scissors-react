import Yoshi from '../../images/Yoshi.png';
import KoopaTroopa from '../../images/koopa2.png'

const CPU = ({ cpuScore }) => {
  return (
    <main>
      <div className="bg-gray-800 bg-opacity-80 rounded-lg p-4 w-32 mx-auto text-center relative z-10 mr-4">
        <img src={KoopaTroopa} alt='koopa troopa' className="w-24 h-auto" />
        <p className='text-white text-3xl'>Score: {cpuScore}</p>
      </div>
    </main>
  );
};

export default CPU;
