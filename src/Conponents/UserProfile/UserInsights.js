import React from 'react';

const UserInsights = () => {
    return (
      <div className='px-6'>
        <p className="text-xl text-custom font-semibold my-5">
          Kunal's Insights
        </p>
        <div className="lg:flex justify-around  lg:justify-between">
          <div>
            <div>
              <h3 className="text-sm text-custom my-3">Experience</h3>
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
                Delhi kolkahta mombai internship
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
          <div>
            <div>
              <h3 className="text-sm text-custom my-3">Education</h3>
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
                Institute of Hotel Management Delhi <br /> B.Sc. in Hospitality
                and Hotel Administration <br /> 2020-2023
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
                Institute of Hotel Management Delhi <br /> B.Sc. in Hospitality
                and Hotel Administration <br /> 2020-2023
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserInsights;