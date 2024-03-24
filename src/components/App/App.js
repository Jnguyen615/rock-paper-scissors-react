import CPU from '../CPU/CPU';
import Header from '../Header/Header';
import Player from '../Player/Player';
import './App.css';

function App() {
  return (
    <div className="App flex flex-col">
      <Header />
      <div className="flex-grow"></div> 
      <div className="flex justify-between"> 
        <Player className="order-1 flex-grow" /> 
        <div className="order-2 flex justify-end"> 
          <CPU />
        </div>
      </div>
    </div>
  );
}

export default App;
