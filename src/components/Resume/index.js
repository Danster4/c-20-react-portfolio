import React from 'react';
import logo2 from '../../assets/images/logos/turtle-svg-logo-2.svg';
import resume from '../../assets/images/resume-jan-2022.svg'
import boxes3 from '../../assets/images/resume-boxes-3.svg'


function Resume() {
  return (
    <section id="resumeSection" className='bg-slate-800 flex grid'>
      
    
      <div className="bg-slate-800 grid gap-3 items-center flex place-content-center justify-center">
        <div className='flex justify-center'>
          <img src={logo2} alt="turtle logo" className='flex justify-center w-1/2'/>
        </div>
        <h1 className="items-center font-semibold text-white lg:text-5xl md:text-4xl sm:text-4xl text-3xl mt-8 mb-2 mx-3">
          Resume
        </h1>
        <br />
      </div>


      <div class="p-6 flex justify-center ">
            
            <a
            href="../../assets/images/daniel-urkov-resume.pdf"
            download={"daniel-urkov-resume.pdf"}
            target="_blank"
            id="resumeButton"
            className=" 
            
            py-3
            px-7
            mr-5
            border border-[#E5E7EB]
            rounded-full
            text-white
            font-medium
            hover:border-green-400 hover:bg-green-800 hover:text-white
            transition" 
            type="submit">
              Download Resume
            </a>
        
            <button
            id="resumeButton"
            className=" 
            
            py-3
            px-7
            ml-5
            border border-[#E5E7EB]
            rounded-full
            text-white
            font-medium
            hover:border-orange-400 hover:bg-orange-800 hover:text-white
            transition" 
            type="submit">
              Preview Resume
            </button>
        </div>



    <div className="flex flex-wrap overflow-hidden justify-center grid-cols-2">

      <div className="w-full  overflow-hidden flex justify-center items-start lg:pt-10 xl:pt-10">
        <h2 className='text-white text-3xl mb-6 gap-3'>
          <em>Work Experience</em>
        </h2>
        <p className="grid flex gap-3 text-white text-xl mx-5 lg:mx-20 xl:mx-[90px]">
          Web Development Intern          
          <br className='sm:hidden md:hidden lg:hidden xl:hidden'/> <br className='sm:hidden md:hidden lg:hidden xl:hidden'/> 
          Guest Services Ambassador
        </p>
        <br />
        <h2 className='text-white text-3xl mb-6 gap-3'>
          <em>Education</em>
        </h2>
        <p className="grid flex gap-3 text-white text-xl mx-5 lg:mx-20 xl:mx-[90px]">
          Phone: (312) 391-7134 
          <br />
          Email: danielurkov@gmail.com
        </p>
      </div>

      <div className="w-full overflow-hidden flex justify-center items-start lg:pt-10 xl:pt-10">
        <h2 className='text-white text-3xl mb-6 gap-3'>
          <em>Languages</em>
        </h2>
        <p className="grid flex gap-3 text-white text-xl mx-5 lg:mx-20 xl:mx-[90px]">
          Phone: (312) 391-7134 
          <br />
          Email: danielurkov@gmail.com
        </p>
        <br />
        <h2 className='text-white text-3xl mb-6 gap-3'>
          <em>UI/UX and Technical Skills</em>
        </h2>
        <p className="grid flex gap-3 text-white text-xl mx-5 lg:mx-20 xl:mx-[90px]">
          Phone: (312) 391-7134 
          <br />
          Email: danielurkov@gmail.com
        </p>

        
        
        
        
      </div>
     
      {/* Resume svg, change into preview modal */}
        {/* <div class="w-full overflow-hidden  mx-auto">
          <div class="p-6">
            <img src={resume} alt="resume image" />
          </div>
        </div> */}



    </div>
    
  

      
    </section>
  )
}

export default Resume;