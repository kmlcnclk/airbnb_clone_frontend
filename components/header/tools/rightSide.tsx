import React from 'react';
import Icon from '../../../src/Icon';
import { BiMenu } from 'react-icons/bi';

const RightSide: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <button className="bg-white text-[#222] font-semibold hover:bg-[#f7f7f7] px-5 py-3 rounded-full transition-colors duration-200">
        Become a Host
      </button>
      <button className="mr-1 bg-white text-[#222] font-semibold hover:bg-[#f7f7f7] p-4 rounded-full transition-colors duration-200">
        <Icon name="language" size="16" />
      </button>
      <button className="bg-white space-x-2 border border-[#dddddd] hover:shadow-lg px-2 py-1 rounded-full transition-shadow duration-200 flex justify-center items-center">
        <BiMenu size="22" />
        <Icon name="person" size="33" color="#717171" />
      </button>
    </div>
  );
};

export default RightSide;
