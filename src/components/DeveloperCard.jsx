import React from 'react';

const DeveloperCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 to-black p-6">
      <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md rounded-3xl shadow-xl p-8 w-full max-w-sm transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-2 hover:shadow-2xl group">
        
        {/* Inner Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-pink-600/10 blur-2xl opacity-30 group-hover:opacity-50 -z-10 transition"></div>

        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png" 
            alt="Developer"
            className="w-24 h-24 mb-4 rounded-full border-4 border-indigo-500 group-hover:border-pink-500 shadow-lg transition-all duration-300"
          />
          <h2 className="text-white text-2xl font-extrabold text-center mb-2 drop-shadow-lg">
            3D Web Developer
          </h2>
          <p className="text-gray-300 text-center text-sm mb-6">
            Building futuristic 3D web experiences with React, Three.js, and modern technologies.
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-4">
            <a 
              href="#"
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white text-sm font-semibold shadow-md transition"
            >
              View Portfolio
            </a>
            <a 
              href="#"
              className="px-6 py-2 border border-indigo-400 hover:bg-indigo-600 text-indigo-300 hover:text-white rounded-full text-sm font-semibold shadow-md transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
