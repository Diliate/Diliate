import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import newImage from '../../assets/homeimages/lulu.png';
import './navigation.css';

function Nav({ page }) {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <header className="nav-header py-4 bg-black sm:py-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" title="Dilate Home" className="logo flex-shrink-0">
          <img
            src={newImage}
            alt="Dilate Logo"
            style={{ height: '60px', width: '60' }} // Adjust height based on your needs
            loading="lazy"
          />
        </Link>

        <div className="flex md:hidden">
          <button
            type="button"
            className="text-white"
            onClick={handleToggle}
            aria-expanded={show}
          >
            {show ? (
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
          <Link
            style={page === 'home' ? { color: '#5956E8' } : {}}
            to="/"
            title="Home"
            className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
          >
            Home
          </Link>
          <Link
            style={page === 'about' ? { color: '#5956E8' } : {}}
            to="/Aboutus"
            title="About"
            className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
          >
            About
          </Link>
          <Link
            style={page === 'blog' ? { color: '#5956E8' } : {}}
            to="/Blog"
            title="Blog"
            className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
          >
            Blog
          </Link>
          <Link
            style={page === 'services' ? { color: '#5956E8' } : {}}
            to="/Services"
            title="Services"
            className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
          >
            Services
          </Link>
          <Link
            style={page === 'contact' ? { color: '#5956E8' } : {}}
            to="/ContactUs"
            title="Contact"
            className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>

      {show && (
        <nav className="md:hidden bg-black text-white mt-2">
          <div className="flex flex-col pt-8 pb-4 space-y-6">
            <Link
              to="/"
              title="Home"
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/Aboutus"
              title="About"
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              About
            </Link>
            <Link
              to="/Blog"
              title="Blog"
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              Blog
            </Link>
            <Link
              to="/Services"
              title="Services"
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              Services
            </Link>
            <Link
              to="/ContactUs"
              title="Contact"
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Nav;
