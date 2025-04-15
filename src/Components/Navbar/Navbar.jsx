import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const menuItem = (
    <>
      <li className="">
        <a href="/">Home</a>
      </li>
      <li className="">
        <a href="/menu">Menu</a>
      </li>
      <li className="">
        <a href="/order">Order</a>
      </li>
      <li className="">
        <a href="/">Shop</a>
      </li>
      <li className="">
        <a href="/">About</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white fixed center max-w-[1440px] z-50 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menuItem}
          </ul>
        </div>
        <a href="/" className="">
          <h1 className="text-4xl font-bold flex items-center  text-violet-600 ">
            <MdOutlineTravelExplore /> Travel.
          </h1>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItem}</ul>
      </div>
      <div class="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary text-white">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
