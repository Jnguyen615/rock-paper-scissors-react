
import Yoshi from '../../images/Yoshi.png';

const CPU = ({ score }) => {
  return (
    <main>
      <img src={Yoshi} alt='yoshi' className="w-24 h-auto"></img>
      Score:{score}
    </main>
  );
};

export default CPU;
