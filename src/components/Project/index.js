import React from 'react';

function Project() {

  const projects = [
    {
      title: "React Reserve",
      subtitle: "MERN Stack",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "https://via.placeholder.com/250x150.png",
      link: "https://reactbootcamp.com",
    },
    {
      title: "React Tracks",
      subtitle: "React and Python",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "https://via.placeholder.com/250x150.png",
        link: "https://reedbarger.com",
    },
    {
      title: "DevChat",
      subtitle: "React and Firebase",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "https://via.placeholder.com/250x150.png",
        link: "https://jsbootcamp.com",
    },
    {
      title: "Epic Todo App",
      subtitle: "React Hooks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "https://via.placeholder.com/250x150.png",
        link: "https://pythonbootcamp.com",
    },
    {
      title: "Epic Todo App",
      subtitle: "React Hooks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "https://via.placeholder.com/250x150.png",
        link: "https://pythonbootcamp.com",
    },
    {
      title: "Epic Todo App",
      subtitle: "React Hooks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "https://via.placeholder.com/250x150.png",
        link: "https://pythonbootcamp.com",
    },
  ];

  return (
    <div className="flex flex-wrap -m-4">
      {projects.map((project) => (
        <a
          href={project.link}
          key={project.image}
          className="sm:w-1/2 w-100 p-4">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={project.image}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                {project.subtitle}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {project.title}
              </h1>
              <p className="leading-relaxed">{project.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
    
  )
}

export default Project;