import MarioImage from '../../images/mario.png';

const Header = () => {
  return (
    <main className="flex flex-col items-center relative z-10">
      <img src={MarioImage} alt='flying-mario' className="w-24 sm:w-16 h-auto mx-auto "/>
      <h1 className='text-6xl font-bold text-white rubik-scribble-regular'>Koopa Clash</h1>
    </main>
  );
};

export default Header;
