import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth } from "firebase/auth";
import "./Header.css";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  console.log(user || user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar container mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              className={"px-4 py-1 rounded mr-4"}
              exact
              to="/"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              className={"px-4 py-1 rounded"}
              to="/blog"
              activeClassName="active"
            >
              Blog
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="btn title-logo btn-ghost font-bold text-2xl md:text-4xl">COOLER</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            className={"px-4 py-1 rounded mr-4"}
            exact
            to="/"
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            className={"px-4 py-1 rounded"}
            to="/blog"
            activeClassName="active"
          >
            Blog
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className=" align-middle flex">
            {isHovering && (
              <span className="">
                <p className=" font-mono text-blue-700">{user.displayName}</p>
              </span>
            )}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <label
                tabIndex={0}
                className="btn mx-4 btn-ghost  btn-circle avatar"
              >
                <div className="rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
            </div>

            <NavLink
              to="/"
              onClick={handleLogOut}
              className="px-4 btn logout py-1 rounded"
            >
              LogOut
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to="/login" activeClassName="active" className="btn ml-4">
              Login
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
