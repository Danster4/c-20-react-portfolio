import React from 'react';
import logo3 from '../../assets/images/logos/turtle-svg-logo-3.svg';
import '../../App.css';
import '../../index.css';

function Navigation(props) {
  // const {
  //   contactSelected,
  //   setContactSelected,
  //   resumeSelected,
  //   setResumeSelected,
  //   portfolioSelected,
  //   setPortfolioSelected
  // } = props;

  const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];

  return (
    <nav class="flex items-center justify-between flex-wrap bg-slate-800 p-6">
      <div class="flex items-left justify-between flex-shrink-0 text-white hover:text-lime-400 mr-6">
        <a href="/" class="flex">
          <img src={logo3} alt="logo" width="54"/>
          <span class="font-semibold text-xl ">Danny Urkov</span>
          
        </a>
        
      </div>
      <div class="flex hide-menu items-center justify-evenly flex-shrink-0 text-white mr-6">
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <li className="items-start inline mt-4 md:inline-block lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4 nav-item" key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                // Whenever a tab is clicked on,
                // the current page is set through the handlePageChange props.
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? 'nav-link active' : 'nav-link'
                }
              >
                {tab}
              </a>
            </li>
            ))}
        </ul>
        {/* <a href="#About" onClick={() => setContactSelected(false), setResumeSelected(false), setPortfolioSelected(false)} class="items-start block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4">
          About Me
        </a>
        <a href="#Portfolio" onClick={() => setContactSelected(false), setResumeSelected(false), setPortfolioSelected(true)} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4">
          Portfolio
        </a>
        <a href="#Resume" onClick={() => setContactSelected(false), setResumeSelected(true), setPortfolioSelected(false)} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4">
          Resume
        </a>
        <a href="#Contact" onClick={() => setContactSelected(true), setResumeSelected(false), setPortfolioSelected(false)} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400">
          Contact
        </a> */}
      </div>
      <div class="block show-hamburger">
        <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-lime-400 hover:border-lime-400">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      {/* <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-md lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Portfolio
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Resume
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div> */}

{/* <a href="#About" onClick={() => setContactSelected(false), setResumeSelected(false), setPortfolioSelected(false)} class="items-start block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4">
          About Me
        </a>
        <a href="#Portfolio" onClick={() => setContactSelected(false), setResumeSelected(false), setPortfolioSelected(true)} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4">
          Portfolio
        </a>
        <a href="#Resume" onClick={() => setContactSelected(false), setResumeSelected(true), setPortfolioSelected(false)} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400 mr-4">
          Resume
        </a>
        <a href="#Contact" onClick={() => setContactSelected(true), setResumeSelected(false), setPortfolioSelected(false)} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-lime-400">
          Contact
        </a> */}
    
    </nav>
  )
}

export default Navigation;