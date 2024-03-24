import { Link } from 'react-router-dom';

const GameSelect = () => {
  return (
    <main className="flex flex-col items-center justify-center"> {/* Added mb-8 for margin-bottom */}
      <div className="text-center">
        <Link to='/easy' className='classic-mode-button'>
          <button className='classic-mode-button'>
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
        <Link to='/difficult' className='classic-mode-button'>
          <button className='challenge-mode-button'>
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
