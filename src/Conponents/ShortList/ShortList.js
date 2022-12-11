import React from 'react';
import { FaAngleDown, FaStar} from "react-icons/fa";
import './ShortList.css';

const ShortList = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Number 1 row  */}
        <div className="flex justify-around items-center lg:items-start lg:justify-start">
          <div className="flex flex-col lg:w-[80px] w-[200px]">
            <div className="avatar mr-2">
              <div className="w-12 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-start items-center">
              <FaStar style={{ color: "#1AB57D" }} />
              <p>4.6/5</p>
            </div>
          </div>
          <div>
            <button
              className="perfomer capitalize"
              style={{ color: "#0059C8" }}
            >
              top perfomer
            </button>
            <div>
              <h3 className="text-xl font-semibold text-custom">Kunal Yadev</h3>
              <p className="text-cutom text-xs">React Developer</p>
              <p className="text-cutom text-xs">New Delhi, India</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom">Skills</h3>
              <p className="text-cutom text-xs">
                ReactJs, HTML, CSS, JavaScript, PHP, NodeJs, Next Js
              </p>
            </div>
          </div>
        </div>
        {/* Number 2  */}
        <div className="lg:flex  lg:text-start justify-around my-5 lg:my-0">
          <div>
            <div className="flex justify-between">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-custom">
                  Experience
                </h3>
              </div>
              <p className="text-xs text-link" style={{ color: "#1D7BEA" }}>
                view all
              </p>
            </div>
            <div className="flex items-center">
              <div className="avatar mr-2">
                <div className="w-8 rounded-full">
                  <img
                    src="https://www.itweb.co.za/static/pictures/2019/01/resized/-fs-adapt-IT-building-2019.xl.jpg"
                    alt="Tailwind-CSS-Avatar-component"
                  />
                </div>
              </div>
              <p className="text-cutom text-xs">
                DS Legends Pte. Ltd. · Internship
              </p>
            </div>
            <div className="flex items-center">
              <div className="avatar mr-2">
                <div className="w-8 rounded-full">
                  <img
                    src="https://www.itweb.co.za/static/pictures/2019/01/resized/-fs-adapt-IT-building-2019.xl.jpg"
                    alt="Tailwind-CSS-Avatar-component"
                  />
                </div>
              </div>
              <p className="text-cutom text-xs">
                DS Legends Pte. Ltd. · Internship
              </p>
            </div>
          </div>
          <div className="text-center mt-5 lg:mt-0">
            <div>
              <button
                className="text-white relative btn-custom-sm rounded-3xl normal-case"
                style={{
                  background: "#2C2C2C",
                  height: "50px",
                  width: "124px",
                }}
              >
                Rate Us
                <FaAngleDown className="absolute right-4 top-5" />
              </button>
            </div>
            <div className="mt-5">
              <button
                className="rounded-3xl btn-custom-sm normal-case"
                style={{
                  background: "#fff",
                  height: "50px",
                  width: "124px",
                  border: "1px solid #264FE2",
                  color: "#264FE2",
                }}
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShortList;