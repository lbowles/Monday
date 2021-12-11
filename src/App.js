import background from './img/background.svg'
import Section1 from './Components/Section1';
import Section3 from './Components/Section3';
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
        <Lottie options={defaultOptions}/>
      </header>
      <div className="container" ><div className="divider" style={{marginTop:"-1px", width:"3000px"}}></div></div>
      <Section1></Section1>
      <div className="container"><div className="divider"></div></div>
      <Section3></Section3>
      <div className="container"><div className="divider"></div></div>
    </div>
  );
}

export default App;
