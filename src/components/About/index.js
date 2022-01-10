import profilePicCircle from '../../assets/images/profile-pic-circle.png'

function About() {
return (
  <div className="grid grid-cols-5 gap-3 items-center flex justify-center flex-wrap">
    <div className="col-span-2">
      <img src={profilePicCircle} alt="profile-pic" width="150"/>
    </div>
    <div className="col-span-3">
      <h1 className="items-center text-white">
        Hi, I'm Danny!
      </h1>
      <h2 className="items-center text-white">
        Web Developer
      </h2>
    </div>
    
  </div>
)
}

export default About;