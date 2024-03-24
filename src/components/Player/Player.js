import Koopa from '../../images/redkoopa.png';
 

const Player = ({ score }) => {
  return (
    <main>
      <img src={Koopa} alt='koopa' className="w-24 h-auto" />
      <p>Score:{score} </p>
    </main>
  );
};

export default Player;
