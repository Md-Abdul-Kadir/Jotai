import logo from './logo.svg';
import './App.css';
import Akash from './Components/Akash';
import BIthi from './Components/BIthi';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Akash/>
       <BIthi/>
      </header>
    </div>
  );
}

export default App;
