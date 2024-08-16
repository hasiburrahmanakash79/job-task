import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const navItems = (
    <>
      <li  onClick={() => setDropdownOpen(false)}>
        <Link to="home" activeClass="active" smooth={true} spy={true}>
          Home
        </Link>
      </li>
      <li onClick={() => setDropdownOpen(false)}>
        <Link to="about" activeClass="active" smooth={true} spy={true}>
          About
        </Link>
      </li>
      <li onClick={() => setDropdownOpen(false)}>
        <Link to="course" activeClass="active" smooth={true} spy={true}>
          Course
        </Link>
      </li>
      <li onClick={() => setDropdownOpen(false)}>
        <Link to="skill" activeClass="active" smooth={true} spy={true}>
          Skill
        </Link>
      </li>
      <li onClick={() => setDropdownOpen(false)}>
        <Link to="subscribe" activeClass="active" smooth={true} spy={true}>
          Subscribe
        </Link>
      </li>
      
      <li onClick={() => setDropdownOpen(false)}>
        <Link to="testimonial" activeClass="active" smooth={true} spy={true}>
          Testimonial
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-primary fixed top-0 z-10 w-full text-white ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="">
            <a className="text-3xl">Akash</a>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal font-semibold text-md px-1">
              {navItems}
            </ul>
          </div>
          <div className="">
            <div className="md:flex hidden gap-6">
            <button className="btn-primary">Login</button>
            <button className="btn-secondary">Register</button>
            </div>
            <div className="dropdown md:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost"
            onClick={handleDropdownToggle}
          >
            <FaBars className="text-xl" />
          </label>
          {dropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52 right-0"
            >
              {navItems}
              <li>
                <Link>Login</Link>
              </li>
              <li><Link>Register</Link></li>
            </ul>
          )}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
