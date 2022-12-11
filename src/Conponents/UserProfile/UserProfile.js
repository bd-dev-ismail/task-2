import React from 'react';
import { FaStar } from 'react-icons/fa';
import Resume from './Resume';
import UserInsights from './UserInsights';

const UserProfile = () => {
    return (
      <div>
        <div>
          <div className="flex flex-row-reverse justify-around lg:justify-between">
            <div
              className="flex flex-col items-center"
              style={{ width: "20%" }}
            >
              <div className="avatar mr-2">
                <div className="w-24 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex mt-5 justify-start items-center">
                <FaStar style={{ color: "#1AB57D" }} />
                <p>4.6/5</p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-2xl font-semibold text-custom">
                  Kunal Yadev
                </h3>
                <p className="text-cutom text-sm">React Developer</p>
                <p className="text-cutom text-sm">New Delhi, India</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-custom">Skills</h3>
                <p className="text-cutom text-sm">
                  ReactJs, HTML, CSS, JavaScript, PHP, NodeJs, Next Js
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="my-10">
          <UserInsights />
        </div>
        <div className="divider"></div>
        <div className="my-10">
          <Resume/>
        </div>
      </div>
    );
};

export default UserProfile;