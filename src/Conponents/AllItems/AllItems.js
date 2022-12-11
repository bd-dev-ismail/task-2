import React, { useEffect, useState } from 'react';
import ShortList from '../ShortList/ShortList';
import UserProfile from '../UserProfile/UserProfile';

const AllItems = () => {
    const [shortList, setShortList] = useState([]);
    useEffect(()=> {
        fetch(
          "https://prog-learn.vercel.app/9b836a9c57a91ce7805cc6a0/cdn/e6df72-9b836a9c57a91ce7805cc6a0"
        )
          .then((res) => res.json())
          .then((data) => {
            console.log('loading',data);
          });
    },[]);
    return (
      <div>
        <h3 className="text-3xl font-bold my-10" style={{ color: "#0B0A0A" }}>
          My Items
        </h3>
        <div className="flex capitalize mb-5">
          <h3
            className="pr-3 text-xl text-custom "
            style={{ borderBottom: " 2px solid #158BE1" }}
          >
            Shortlisted <button className="bg-gray-300 px-1">1</button>
          </h3>
          <h3 className="pr-3 text-xl text-custom">
            Actions <button className="bg-gray-300 px-1">1</button>
          </h3>
          <h3 className="pr-3 text-xl text-custom">
            My Teams <button className="bg-gray-300 px-1">1</button>
          </h3>
        </div>
        <div className="lg:flex my-4">
          <div className="w-full lg:w-2/3">
            <ShortList />
            <div className="divider"></div>
            <ShortList />
            <div className="divider"></div>
            <ShortList />
            <div className="divider"></div>
            <div className='text-center lg:text-start'>
              <div className="btn-group gap-4 ">
                <button
                  style={{ background: "#2D2D2D" }}
                  className="w-10 h-10 text-white  border border-r-0  rounded-full "
                >
                  1
                </button>

                <button className="text-sm font-semibold text-black ">2</button>

                <button className="text-sm font-semibold text-black ">3</button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <UserProfile />
          </div>
        </div>
      </div>
    );
};

export default AllItems;