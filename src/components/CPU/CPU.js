import KoopaTroopa from '../../images/koopa2.png';

const CPU = ({ cpuScore }) => {
  return (
    <main>
      <div className='bg-gray-800 bg-opacity-90 rounded-lg p-2 sm:p-4 md:p-6 w-24 sm:w-32 md:w-48 mx-auto text-center relative z-10 mr-4'>
        <img src={KoopaTroopa} alt='koopa troopa' className='w-full h-auto' />
        <p className='text-white text-sm sm:text-xl md:text-3xl'>
          Score: {cpuScore}
        </p>
      </div>
    </main>
  );
};

export default CPU;
