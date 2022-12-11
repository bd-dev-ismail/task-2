import React from 'react';
import { FaQuestionCircle, FaRegBell } from 'react-icons/fa';

const Navbar = () => {
    return (
      <div>
        <div className="navbar bg-base-100 px-2 lg:px-6">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Collabtalent</a>
            <p className='hidden lg:block'>Desilu Inc</p>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <FaQuestionCircle className="text-xl lg:mr-[38px]" />
                  <FaRegBell className="text-xl  lg:mr-[38px]" />
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              ></div>
            </div>
            <div className="dropdown dropdown-end flex items-center">
              <p>John Deo Owner</p>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;