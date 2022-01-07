import logo from './assets/images/logos/neon-bar-circular.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test deployment on GitHub Pages. Please check back later.
        </p>
        <a
          className="App-link"
          href="https://pngtree.com/so/Neon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thanks PNGTree.com for the image!
        </a>
      </header>
    </div>
  );
}

export default App;
