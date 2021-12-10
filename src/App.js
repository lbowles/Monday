import background from './img/background.svg'
import Section1 from './Components/Section1';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <img src={background} alt="background" className="background"></img>
      </header>
      <Section1></Section1>
    </div>
  );
}

export default App;
