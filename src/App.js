import logo from './logo.png';
import './App.css';

import Boton from './Boton';
  function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='App-Grid-Buttons'>
          <Boton text="Sing-In" className="Button-standar" id="1"/>
          <Boton text="Log-In" className="Button-second" id="2"/>
      </div>
      <div className='App-pie'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque fermentum justo dignissim scelerisque.
      </div>
    </div>

  );
}

export default App;
