import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const SERVICES = [
  { path: "/services", label: "All Services" },
  { path: "/services/social-media-marketing", label: "Social Media Marketing" },
  { path: "/services/paid-advertising", label: "Paid Advertising" },
  { path: "/services/advanced-analytics", label: "Advanced Analytics" },
  { path: "/services/seo-optimization", label: "SEO Optimization" },
  { path: "/services/content-marketing", label: "Content Marketing" },
  { path: "/services/website-development", label: "Website Development" },
];

// Services Menu Component
const ServicesMenu = memo(() => (
  <Menu as="div" className="relative z-50">
    <MenuButton className="inline-flex items-center gap-2 rounded-md bg-transparent py-1.5 px-3 text-base font-normal text-gray-400 transition-all duration-200 hover:text-white focus:outline-none">
      Services
      <ChevronDownIcon className="h-5 w-5 text-gray-400 hover:text-white" />
    </MenuButton>
    <MenuItems className="absolute right-0 w-52 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-1 text-sm text-white shadow-lg focus:outline-none">
      {SERVICES.map(({ path, label }) => (
        <MenuItem key={path}>
          {({ active }) => (
            <Link
              to={path}
              className={`${
                active ? "bg-gray-700" : ""
              } group flex w-full items-center gap-2 rounded-lg py-1.5 px-3`}
            >
              {label}
            </Link>
          )}
        </MenuItem>
      ))}
    </MenuItems>
  </Menu>
));

const NewHeader = memo(() => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" title="Dilate Home" className="shrink-0 flex">
              <img
                src="../static/images/lulu.png"
                alt="Dilate Logo"
                style={{ height: "70px", width: "auto" }}
                loading="lazy"
              />
            </Link>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
              >
                {expanded ? (
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
              {["/", "/Aboutus", "/Blog", "/contactus"].map((path, index) => (
                <Link
                  key={path}
                  to={path}
                  title={["Home", "About", "Blog", "Contact"][index]}
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  {["Home", "About", "Blog", "Contact"][index]}
                </Link>
              ))}
              <ServicesMenu />
            </nav>
          </div>

          {expanded && (
            <nav className="md:hidden">
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                {["/", "/Aboutus", "/Blog", "/services", "/contactus"].map(
                  (path, index) => (
                    <Link
                      key={path}
                      to={path}
                      title={
                        ["Home", "About", "Blog", "Services", "Contact"][index]
                      }
                      className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                    >
                      {["Home", "About", "Blog", "Services", "Contact"][index]}
                    </Link>
                  )
                )}
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            <div className="lg:w-2/3">
              <p className="pt-8 text-lg font-normal tracking-widest text-gray-200 uppercase">
                A Fully Integrated Digital
              </p>
              <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  Marketing
                </span>{" "}
                Agency
              </h1>
              <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
                We understand our customer's needs and hence our work approach &
                systems will tend to know many things about the project result.
              </p>
              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <Link
                  to="/login"
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500"
                  role="button"
                  title="Get Started"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full ml-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500"
                  role="button"
                  title="Services"
                >
                  Services
                </Link>
              </div>
              <div>
                <div className="inline-flex items-center pt-4 mt-4 border-t border-gray-800 sm:pt-4 sm:mt-4"></div>
              </div>
            </div>

            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
              <img
                className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                alt="3D Illustration of Digital Marketing"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default NewHeader;
