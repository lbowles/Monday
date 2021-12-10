import background from './img/background.svg'
import Section1 from './Components/Section1';
import './App.css';
import Lottie from 'react-lottie';
import data from './data.json';


function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }};
  return (
    <div className="App">
      <header className="container">
        <Lottie 
        options={defaultOptions}
        />
      </header>
      <Section1></Section1>
    </div>
  );
}

export default App;
