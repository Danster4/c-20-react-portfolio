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
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default MainContainer;