import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <main>
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div> 
  );
}

export default App;
