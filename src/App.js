import Header from './components/Header';
import About from './components/About';
import logo from './assets/images/logos/neon-bar-circular.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      <main>
        
      </main>
     
    </div> 
  );
}

export default App;
