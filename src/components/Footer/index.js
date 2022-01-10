import React from 'react';
import github from '../../assets/images/logos/icons8-github.svg'
import stackoverflow from '../../assets/images/logos/icons8-stack-overflow.svg'
import linkedin from '../../assets/images/logos/icons8-linkedin.svg'

function Footer() {
  return (
    <div className='flex items-center justify-center flex-wrap bg-slate-800 p-6'>
      <a href="https://github.com/Danster4" target="_blank" className="flex mr-4 hover:text-lime-400">
        <img src={github} alt="github logo and link" width="37"/>
      </a>
      <a href="https://stackoverflow.com/users/16556162" target="_blank" className="flex mr-4 fill-lime-400">
        <img src={stackoverflow} alt="stack overflow logo and link" className="fill-lime-400"width="30"/>
      </a>
      <a id="linkedin" href="https://www.linkedin.com/in/danielurkov/" target="_blank" className="flex ml-2">
        <img src={linkedin} alt="linkedin logo and link" width="30"/>
      </a>
    </div>
    
  )
}

export default Footer;