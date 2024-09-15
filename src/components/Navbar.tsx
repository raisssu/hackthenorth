import React from 'react';
import img from '/src/components/images/add_a_heading__1__480.png'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-customBeige p-3 border-b-2 border-borderGreen">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="w-24">
          <img src={img} className="w-full h-auto object-scale-down w-5/6 h-5/6" alt="Logo" />
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-9">
          <a href="#" className="text-customGreen hover:text-green-100 active:opacity-60">
            Welcome
          </a>
          <a href="#" className="text-customGreen hover:text-green-100 active:opacity-60">
            About
          </a>
          <a href="#" className="text-customGreen hover:text-green-100 active:opacity-60">
            Mission
          </a>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <a 
            href="#contact" 
            className="bg-customGreen text-customBeige px-4 py-2 rounded-full hover:opacity-80 active:opacity-60 italic ml-4"
          >
            Upload
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
