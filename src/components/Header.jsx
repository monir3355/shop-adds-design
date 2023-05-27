import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  return (
    <>
      <header className="relative">
        <nav className="container mx-auto flex justify-between items-center py-6">
          <div>
            <Link className="font-semibold text-2xl inline-flex" to="/">
              <img className="h-8 w-8" src="/images/logo.png" alt="" />{" "}
              <span className="ml-2">Shop.com</span>
            </Link>
          </div>
          <Bars3BottomRightIcon
            onClick={() => setIsOpen(!isOpen)}
            className="h-7 font-semibold md:hidden cursor-pointer z-10"
          />
          <ul className="md:flex gap-6 hidden">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category"
                aria-label="Category"
                title="Category"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Category
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tags"
                aria-label="Tags"
                title="Tags"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Tags
              </NavLink>
            </li>
          </ul>
        </nav>
        {isOpen && (
          <nav className="container mx-auto flex-col text-center py-7 absolute bg-blue-900 top-8 left-0 w-full right-0 rounded-md z-10">
            <XMarkIcon
              onClick={() => setIsOpen(!isOpen)}
              className="h-7 font-semibold md:hidden top-3 right-4 absolute cursor-pointer"
            />
            <div>
              <Link className="font-semibold text-2xl inline-flex" to="/">
                <img className="h-8 w-8" src="/images/logo.png" alt="" />{" "}
                <span className="ml-2">Shop.com</span>
              </Link>
            </div>

            <ul className="flex-col gap-6">
              <li>
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category"
                  aria-label="Category"
                  title="Category"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : ""
                  }
                >
                  Category
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tags"
                  aria-label="Tags"
                  title="Tags"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : ""
                  }
                >
                  Tags
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <hr />
    </>
  );
};

export default Header;
