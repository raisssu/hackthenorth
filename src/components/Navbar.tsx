import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-customGreen p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <img className='h-12' src="download.jpg" alt="Logo" />

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-300 hover:text-white italic">Welcome</a>
          <a href="#" className="text-gray-300 hover:text-white italic">About</a>
          <a href="#" className='text-gray-300 hover:text-white italic'>Mission</a>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <a href="#contact" className="bg-customBeige text-customGreen px-4 py-2 rounded-full hover:bg-customBeige italic">Upload</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
