import React from 'react';

const Nav = () => {
  const navOptions =<>
            
              <li><a>Home</a></li>            
              <li><a>CONTACT US</a></li>
              <li><a>DASHBOARD</a></li>
              <li><a>Our Menu</a></li>
              <li><a>Our Shop</a></li>


  </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Taste atlas</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
        {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Sign In</a>
        </div>
      </div>
    );
};

export default Nav;