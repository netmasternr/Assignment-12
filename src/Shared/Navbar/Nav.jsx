import { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from '../../assets/logo/primecare-high-resolution-logo-transparent.png';
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Components/Hooks/useAuth/useAuth";

const Nav = () => {
  const { logOut, user } = UseAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <Navbar fluid rounded className="fixed z-10 max-w-screen-xl mx-auto w-full bg-black bg-opacity-50">
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center">
          <img className="w-10 mr-4" src={logo} alt="PrimeCare Logo" />
          <Link to='/' className="text-xl font-semibold text-orange-400">PrimeCare</Link>
        </div>

        <div className="flex items-center">
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-white bg-orange-400 p-1 font-bold rounded-md' : 'p-2 text-white font-bold'
              }
              onClick={handleLinkClick}
            >
              Home
            </NavLink>

            <NavLink
              to="/availableCamp"
              className={({ isActive }) =>
                isActive ? 'text-white bg-orange-400 p-1 font-bold rounded-md' : 'p-2 text-white font-bold'
              }
              onClick={handleLinkClick}
            >
              Available Camps
            </NavLink>
          
            {!user &&
              <NavLink
                to="/joinUs"
                className={({ isActive }) =>
                  isActive ? 'text-white bg-orange-400 p-1 font-bold rounded-md' : 'p-2 text-white font-bold'
                }
                onClick={handleLinkClick}
              >
                Join Us
              </NavLink>
            }

          </div>

          <div className="md:mx-20">
            {user && (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={user.photoURL || "https://flowbite.com/docs/images/people/profile-picture-5.jpg"} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user.displayName}</span>
                  <span className="block truncate text-sm font-medium">{user.email}</span>
                </Dropdown.Header>

                <Link to='/dashboard/Profile'>
                  <Dropdown.Item>Dashboard </Dropdown.Item>
                </Link>

                <Link to='/dashboard/Profile'>
                  <Dropdown.Item>Profile </Dropdown.Item>
                </Link>

                <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
              </Dropdown>
            )}
          </div>
          <button
            className="md:hidden text-white focus:outline-none ml-4"
            onClick={handleToggle}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden w-full`}>
        <div className="flex flex-col items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white bg-orange-400 p-1 font-bold rounded-md' : 'p-2 text-white font-bold'
            }
            onClick={handleLinkClick}
          >
            Home
          </NavLink>

          <NavLink
            to="/availableCamp"
            className={({ isActive }) =>
              isActive ? 'text-white bg-orange-400 p-1 font-bold rounded-md' : 'p-2 text-white font-bold'
            }
            onClick={handleLinkClick}
          >
            Available Camps
          </NavLink>

          {user && (
            <NavLink
              to="/joinUs"
              className={({ isActive }) =>
                isActive ? 'text-white bg-orange-400 p-1 font-bold rounded-md' : 'p-2 text-white font-bold'
              }
              onClick={handleLinkClick}
            >
              Join Us
            </NavLink>
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default Nav;
