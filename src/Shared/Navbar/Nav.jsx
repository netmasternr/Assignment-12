import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from '../../assets/logo/primecare-high-resolution-logo-transparent.png'
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (

    <Navbar fluid rounded className="fixed z-10 max-w-screen-xl mx-auto w-full  bg-black bg-opacity-30">
      <Link to='/'>
        <Navbar.Brand >
          <img className="w-14 mr-4" src={logo} alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-orange-400">PrimeCare</span>
        </Navbar.Brand>
      </Link>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link  >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white bg-orange-400 p-1 font-bold rounded-md' : 'p-2 text-white font-bold'
            }
          >
            Home
          </NavLink>
        </Navbar.Link>

        <Navbar.Link>
          <NavLink
            to="/availableCamp"
            className={({ isActive }) =>
              isActive ? 'text-white bg-orange-400 p-1 r font-bold rounded-md' : 'p-2 text-white font-bold'
            }
          >
            Available Camps
          </NavLink>
        </Navbar.Link>

        <Navbar.Link>
          <NavLink
            to="/joinUs"
            className={({ isActive }) =>
              isActive ? 'text-white bg-orange-400 p-1  font-bold rounded-md' : 'p-1 text-white font-bold'
            }
          >
            Join Us
          </NavLink></Navbar.Link>
      </Navbar.Collapse>


    </Navbar>

  );
};

export default Nav;