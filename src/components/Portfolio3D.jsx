import React from 'react';

const Portfolio3D = () => {
  const projects = [
    {
      id: 1,
      title: "Immersive 3D Website",
      description: "Built using Three.js, React Three Fiber, and GSAP animations.",
      image: "https://i.ibb.co.com/LdQWr94Y/3D-1.png", 
      link: "#"
    },
    {
      id: 2,
      title: "Interactive Product Showcase",
      description: "Created a 360° product viewer with real-time lighting effects.",
      image: "https://i.ibb.co.com/XrrpFk33/3ds-1.webp",
      link: "#"
    },
    {
      id: 3,
      title: "Virtual Art Gallery",
      description: "Designed a VR-ready virtual exhibition space using WebGL.",
      image: "https://i.ibb.co.com/1Yc2rtL1/3ds.webp",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-8 flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-extrabold mb-12 text-center">
        My <span className="text-indigo-500">3D Portfolio</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:-translate-y-4 hover:rotate-2 hover:shadow-indigo-500/50 cursor-pointer"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform group-hover:scale-110"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-6 transition-opacity">
              <h2 className="text-white text-2xl font-bold mb-2 text-center">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm text-center mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-semibold transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio3D;
