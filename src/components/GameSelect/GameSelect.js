import { Link } from 'react-router-dom';

const GameSelect = () => {
  return (
    <main className="flex flex-col items-center justify-center"> {/* Added mb-8 for margin-bottom */}
      <div className="text-center">
        <h1 className='text-white relative z-10 mb-20 mt-20'>Choose your game mode</h1>
        <Link to='/easy' className='classic-mode-button relative z-10'>
          <button className='classic-mode-button font-workbench bg-gray-800 rounded-lg p-4 text-white'>
            🕹️ Classic Version 🤞 <br />
            Rules: <br />
            MasterShell &gt; Lightning <br />
            BananaPeel &gt; MasterShell <br />
            Lightning &gt; BananaPeel
          </button>
        </Link>
        <article className='challenge-mode-box mt-20'> 

        <br />
        <br />
        <Link to='/difficult' className='classic-mode-button relative z-10'>
          <button className='challenge-mode-button bg-gray-800 rounded-lg p-4 text-white font-workbench'>
            🎮 Difficult Version 🤯 <br />
            Rules: <br />
            MasterShell &gt; Lightning &amp; Mushroom <br />
            BananaPeel &gt; MasterShell &amp; Bullet <br />
            Lightning &gt; BananaPeel &amp; Mushroom <br />
            Mushroom &gt; BananaPeel &amp; Bullet <br />
            Bullet &gt; Lightning &amp; MasterShell
          </button>
        </Link>
        </article>
      </div>
    </main>
  );
};

export default GameSelect;
