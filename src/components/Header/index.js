import React from 'react';
import Navigation from '../Navigation';
import logo from '../../assets/images/logos/neon-bar-circular.png';
import '../../index.css';

function Header() {
<header className='bg-sky-500' >
  <a href="/">
    <span role="img" aria-label="camera">{logo}</span>Danny Urkov
  </a>
  <h1 className='text-3xl font-bold underline bg-gray-900'>
    hi hi hi 
  </h1>
  <Navigation />
</header>

}

export default Header;
