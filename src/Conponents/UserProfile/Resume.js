import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
    return (
      <div>
        <div className="flex justify-between px-6 lg:px-0">
          <h3 className="text-2xl font-semibold text-custom">Resume</h3>
          <div className="flex items-center">
            <FaDownload className='mr-3' style={{ color: "#1382EA" }} />
            <button style={{ color: "#1382EA" }}> Download</button>
          </div>
        </div>
      </div>
    );
};

export default Resume;