import React, { useContext, useState } from "react";
import Container from "../../Container";
import { Link, NavLink } from "react-router-dom";
import { MdImageSearch } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../../../Provider/AuthProvider";

function Header() {
  const { user, userSignOut } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    userSignOut()
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="lg:py-5 py-[15px] lg:bg-transparent bg-white lg:shadow-none shadow-xl">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Link
              to="/"
              className="text-[26px] font-semibold text-primary flex items-center gap-1"
            >
              <MdImageSearch className="text-blue" />
              Future
            </Link>
          </div>
          <div className="lg:block hidden">
            <ul className="flex items-center space-x-7">
              <li className="text-[15px] font-medium text-primary">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "text-blue" : "")}
                >
                  Start a Search
                </NavLink>
              </li>
              <li className="text-[15px] font-medium text-primary">
                <NavLink
                  to="/myJob"
                  className={({ isActive }) => (isActive ? "text-blue" : "")}
                >
                  My Job
                </NavLink>
              </li>
              <li className="text-[15px] font-medium text-primary">
                <NavLink
                  to="/postedJob"
                  className={({ isActive }) => (isActive ? "text-blue" : "")}
                >
                  Posted A Job
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:block hidden">
            {user ? (
              <div className="flex items-center gap-3">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <span onClick={handleClick} className="cursor-pointer">
                  Logout
                </span>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-[15px] text-primary mr-3 border border-blue py-[6px] px-3"
                >
                  Login
                </Link>
                <Link
                  to="/signUp"
                  className="text-[15px] px-3 py-[6px] bg-blue text-white"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <div className="lg:hidden block">
            <span
              onClick={() => setOpenMenu(!openMenu)}
              className="cursor-pointer"
            >
              {openMenu ? (
                <IoClose className="text-[24px]" />
              ) : (
                <HiBars3 className="text-[24px]" />
              )}
            </span>
          </div>
        </div>
        <div>
          {openMenu && (
            <div className="absolute top-[70px] left-0 w-[300px] h-screen bg-gray-800 pt-10 pl-10">
              <div>
                <ul className="space-y-5">
                  <li className="text-[15px] font-medium text-gray-300">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "text-blue" : ""
                      }
                    >
                      Start a Search
                    </NavLink>
                  </li>
                  <li className="text-[15px] font-medium text-gray-300">
                    <NavLink
                      to="/myJob"
                      className={({ isActive }) =>
                        isActive ? "text-blue" : ""
                      }
                    >
                      My Jobs
                    </NavLink>
                  </li>
                  <li className="text-[15px] font-medium text-gray-300">
                    <NavLink
                      to="/postedJob"
                      className={({ isActive }) =>
                        isActive ? "text-blue" : ""
                      }
                    >
                      Posted A Job
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-5 pt-5">
                <Link
                  to="/login"
                  className="text-[15px] text-white border border-gray-300 py-[6px] w-[85px] text-center"
                >
                  Login
                </Link>
                <Link
                  to="/signUp"
                  className="text-[15px] px-3 py-[6px] bg-blue text-white w-[85px]"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Header;
