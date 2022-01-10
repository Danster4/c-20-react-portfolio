import React, { useState } from 'react';
import About from '../About';
import Resume from '../Resume';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Header from '../Header';
import Navigation from '../Navigation';

function MainContainer(props) {
  // Using useState, set the default value for currentPage to 'About'
  const { currentPage, renderPage } = props;

  return (
    <div className='mainContainer flex bg-slate-800'>
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default MainContainer;