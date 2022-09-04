import React from 'react';
import Icon from '../../../../src/Icon';
import { BiMenu } from 'react-icons/bi';
import { Dropdown, Menu } from 'antd';
import NextLink from 'next/link';

const menu = (
  <Menu
    items={[
      {
        label: 'Sign up',
        key: '1',
      },
      {
        label: 'Log in',
        key: '2',
      },
      {
        label: 'Host your home',
        key: '3',
      },
      {
        label: 'Host an experience',
        key: '4',
      },
      {
        label: 'Help',
        key: '5',
      },
    ]}
  />
);

const RightSide: React.FC = () => {
  return (
    <div className="flex items-center justify-center right-side">
      <NextLink href="https://www.airbnb.com/host/homes">
        <a target="_blank">
          <button className="bg-white text-[#222] font-semibold hover:bg-[#f7f7f7] px-5 py-3 rounded-full transition-colors duration-200">
            Become a Host
          </button>
        </a>
      </NextLink>
      <button className="mr-1 bg-white text-[#222] font-semibold hover:bg-[#f7f7f7] p-4 rounded-full transition-colors duration-200">
        <Icon name="language" size="16" />
      </button>
      <Dropdown
        overlay={menu}
        trigger={['click']}
        getPopupContainer={(trigger: any) => trigger.parentNode}
        placement="bottomRight"
      >
        <a onClick={(e) => e.preventDefault()}>
          <button className="bg-white space-x-2 border border-[#dddddd] hover:shadow-lg px-2 py-1 rounded-full transition-shadow duration-200 flex justify-center items-center">
            <BiMenu size="22" color="#222" />
            <Icon name="person" size="33" color="#717171" />
          </button>
        </a>
      </Dropdown>
    </div>
  );
};

export default RightSide;
