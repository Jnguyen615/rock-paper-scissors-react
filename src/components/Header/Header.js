import MarioImage from '../../images/mario.png';

const Header = () => {
  return (
    <main className="flex flex-col items-center">
      <img src={MarioImage} alt='flying-mario' className="w-20 h-auto mx-auto"/>
      <h1 className='text-3xl font-bold'>Koopa Clash</h1>
      <p className='text-2xl font-bold'>Choose your game mode!</p>
    </main>
  );
};

export default Header;
