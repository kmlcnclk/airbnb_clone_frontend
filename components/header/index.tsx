import React, { useState } from 'react';
import Icon from '../../src/Icon';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { Drawer } from 'antd';
import SearchTabPanel from './tools/searchTabPanel';
import WherePopupMenu from './tools/wherePopupMenu';
import HeaderExtra from './tools/headerExtra';

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [tabValue, setTabValue] = useState('1');
  const [clickedButton, setClickedButton] = useState<string | null>('1');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <header className="header">
        <Drawer
          title={
            <div className="pl-[62px] !w-min">
              <Icon name="airbnb" width="102" height="32" color="#ff385c" />
            </div>
          }
          placement="top"
          closeIcon={null}
          getContainer={false}
          width={500}
          onClose={onClose}
          visible={visible}
          className="!mt-1"
          extra={<HeaderExtra setTabValue={setTabValue} />}
        >
          {tabValue === '1' && (
            <SearchTabPanel
              clickedButton={clickedButton}
              setClickedButton={setClickedButton}
            />
          )}
          {tabValue === '2' && <p>Bursa</p>}
          {tabValue === '3' && <p>Ceyhan</p>}
          {visible && tabValue === '1' && clickedButton === '1' && (
            <WherePopupMenu />
          )}
        </Drawer>
      </header>
      <header className="py-5 px-24 border-b border-[#ebebeb] flex items-center justify-between header">
        <div className="w-1/3">
          <Icon name="airbnb" width="102" height="32" color="#ff385c" />
        </div>
        <div className="w-1/3">
          <div
            onClick={showDrawer}
            className="border w-fit flex items-center border-[#dddddd] py-2 px-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          >
            <button className="font-semibold text-[#222] border-r px-5 border-[#dddddd]">
              Anywhere
            </button>
            <button className="font-semibold text-[#222] border-r px-5 border-[#dddddd]">
              Any week
            </button>
            <div className="flex items-center">
              <button className="font-semibold text-[#717171] px-5">
                Add guests
              </button>
              <div className="bg-[#ff385c] w-8 h-8 rounded-full flex items-center justify-center">
                <AiOutlineSearch size={18} cursor="pointer" color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-end">
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
        </div>
      </header>
    </>
  );
};

export default Header;
