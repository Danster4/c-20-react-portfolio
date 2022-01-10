import profilePicCircle from '../../assets/images/profile-pic-circle.png'

function About() {
return (
  <div className='bg-slate-800'>
    <div className='lg:[top-gap]'>

    </div>
    <div className="bg-slate-800 grid grid-rows-1 gap-3 items-center flex justify-center">
      <h1 className="items-center font-semibold text-white lg:text-5xl md:text-4xl sm:text-4xl text-3xl mt-8 mb-2 mx-3">
        Web Developer, <br className='sm:hidden md:hidden lg:hidden xl:hidden'/> UI/UX Designer &<br className='md:hidden lg:hidden xl:hidden'/>Filmmaker 
      </h1>
      
      <h2 className="items-center text-white text-xl mx-3">
        I like to code, <br className='sm:hidden md:hidden lg:hidden xl:hidden'/>film nature/short stories, & <br className='sm:hidden md:hidden lg:hidden xl:hidden'/> sometimes count the stars.
      </h2>
      <div className="grid place-content-center">
        <img className="flex items-center justify-center mt-8 -mb-10 mx-2 place-content-center" src={profilePicCircle} alt="profile-pic" width="250"/>
      </div>
    </div>
      


    <section class="pt-[90px] sm:pt-[90px] md:pt-[90px] lg:pt-[90px] pb-10 lg:pb-20 bg-[#F3F4F6]">
      <div class="grid flex place-content-center justify-center">
        <h1 className="items-center font-semibold text-black text-3xl mb-6 mx-3">
          Hello, I'm Danny Urkov. Nice to meet you!
        </h1>
        
        <h2 className="items-center text-black text-lg mb-4 mx-3 place-content-center">
          I began my journey studying filmmaking, psychology, and mental health/therapeutic training. 
          Now on a new adventure, I strive to combine old passions with new. I try my best each day 
          to design and develop websites and applications that have the opportunity to make the world a better place,
          by sharing love, positivity, and hope. 
        </h2>
        <div class="flex flex-wrap mx-4 mt-10">
          
          <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="bg-white rounded-lg overflow-hidden mb-10">
                <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                    alt="image"
                    class="w-full"
                    />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                          href="javascript:void(0)"
                          class="
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mb-4
                          block
                          hover:text-primary
                          "
                          >
                      50+ Best creative website themes & templates
                      </a>
                    </h3>
                    <p class="text-base text-body-color leading-relaxed mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="
                      inline-block
                      py-2
                      px-7
                      border border-[#E5E7EB]
                      rounded-full
                      text-base text-body-color
                      font-medium
                      hover:border-primary hover:bg-primary hover:text-lime-400
                      transition
                      "
                      >
                    View Details
                    </a>
                </div>
              </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="bg-white rounded-lg overflow-hidden mb-10">
                <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
                    alt="image"
                    class="w-full"
                    />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                          href="javascript:void(0)"
                          class="
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mb-4
                          block
                          hover:text-primary
                          "
                          >
                      The ultimate UX and UI guide to card design
                      </a>
                    </h3>
                    <p class="text-base text-body-color leading-relaxed mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="
                      inline-block
                      py-2
                      px-7
                      border border-[#E5E7EB]
                      rounded-full
                      text-base text-body-color
                      font-medium
                      hover:border-primary hover:bg-primary hover:text-white
                      transition
                      "
                      >
                    View Details
                    </a>
                </div>
              </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="bg-white rounded-lg overflow-hidden mb-10">
                <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                    alt="image"
                    class="w-full"
                    />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                          href="javascript:void(0)"
                          class="
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mb-4
                          block
                          hover:text-primary
                          "
                          >
                      Creative Card Component designs graphic elements
                      </a>
                    </h3>
                    <p class="text-base text-body-color leading-relaxed mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="
                      inline-block
                      py-2
                      px-7
                      border border-[#E5E7EB]
                      rounded-full
                      text-base text-body-color
                      font-medium
                      hover:border-primary hover:bg-primary hover:text-white
                      transition
                      "
                      >
                    View Details
                    </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
{/* Cards Section End */}
    
    
  </div>
)
}

export default About;