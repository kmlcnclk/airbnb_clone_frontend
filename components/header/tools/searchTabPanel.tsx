import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';
import { Button, Divider, Drawer, Input, Space, Tabs } from 'antd';

const variants = {
  open: { width: 100 },
  closed: { width: 52 },
};

interface SearchTabPanelProps {
  clickedButton: string | null;
  setClickedButton: Function;
  chooseDateState: string;
  flexibleStayForWeekState: string;
  tabValue: string;
}

const SearchTabPanel: React.FC<SearchTabPanelProps> = ({
  clickedButton,
  setClickedButton,
  chooseDateState,
  flexibleStayForWeekState,
  tabValue,
}: SearchTabPanelProps) => {
  return (
    <div className="flex items-center justify-center w-full mt-1">
      <div
        className={`border flex items-center w-[848px] ${
          clickedButton != null ? 'bg-[#ebebeb]' : 'bg-white'
        } border-[#ddd] rounded-full cursor-pointer`}
      >
        <div
          className={`flex flex-col ${
            clickedButton === '1'
              ? 'bg-white shadow-2xl scale-105'
              : 'hover:bg-[#ebebeb]'
          } rounded-full px-9 w-2/6 py-2 transition-colors duration-200 where`}
          onClick={() => {
            if (clickedButton === '1') {
              setClickedButton(null);
            } else {
              setClickedButton('1');
            }
          }}
        >
          <p className="text-[#222222] mb-0 font-semibold">Where</p>
          <Input
            placeholder="Search destinations"
            autoFocus={true}
            className={`!p-0 !border-none focus:!ring-0 ${
              clickedButton === '1'
                ? '!bg-white'
                : clickedButton == null
                ? 'inputHover !bg-white'
                : '!bg-[#ebebeb]'
            } placeholder:!text-[#656565] placeholder:!font-normal font-bold`}
          />
        </div>
        {tabValue === '1' && (
          <>
            {chooseDateState === 'Choose dates' ? (
              <div className="flex items-center justify-center w-2/6">
                <div
                  className={`flex flex-col ${
                    clickedButton === '2'
                      ? 'bg-white shadow-2xl scale-105'
                      : 'hover:bg-[#ebebeb]'
                  } rounded-full px-9 py-2 w-1/2 transition-colors duration-200`}
                  onClick={() => {
                    if (clickedButton === '2') {
                      setClickedButton(null);
                    } else {
                      setClickedButton('2');
                    }
                  }}
                >
                  <p className="text-[#222222] mb-0 font-semibold">Check in</p>
                  <p className="text-[#656565] mb-0">Add dates</p>
                </div>
                <div className="bg-[#ddd] h-9 w-[1px]"></div>
                <div
                  className={`flex flex-col ${
                    clickedButton === '3'
                      ? 'bg-white shadow-2xl scale-105'
                      : 'hover:bg-[#ebebeb]'
                  } rounded-full px-9 py-2 w-1/2 transition-colors duration-200`}
                  onClick={() => {
                    if (clickedButton === '3') {
                      setClickedButton(null);
                    } else {
                      setClickedButton('3');
                    }
                  }}
                >
                  <p className="text-[#222222] mb-0 font-semibold">Check out</p>
                  <p className="text-[#656565] mb-0">Add dates</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center w-2/6">
                <div
                  className={`flex flex-col ${
                    clickedButton === '2' || clickedButton === '3'
                      ? 'bg-white shadow-2xl scale-105'
                      : 'hover:bg-[#ebebeb]'
                  } rounded-full px-9 py-2 w-full transition-colors duration-200`}
                  onClick={() => {
                    if (clickedButton === '2' || clickedButton === '3') {
                      setClickedButton(null);
                    } else {
                      setClickedButton('2');
                    }
                  }}
                >
                  <p className="text-[#222222] mb-0 font-semibold">When</p>
                  <p className="text-[#656565] mb-0">
                    Any {flexibleStayForWeekState.toLocaleLowerCase()}
                  </p>
                </div>
              </div>
            )}
          </>
        )}
        {tabValue === '2' && (
          <div className="flex items-center justify-center w-2/6">
            <div
              className={`flex flex-col ${
                clickedButton === '5'
                  ? 'bg-white shadow-2xl scale-105'
                  : 'hover:bg-[#ebebeb]'
              } rounded-full px-9 py-2 w-full transition-colors duration-200`}
              onClick={() => {
                if (clickedButton === '5') {
                  setClickedButton(null);
                } else {
                  setClickedButton('5');
                }
              }}
            >
              <p className="text-[#222222] mb-0 font-semibold">Date</p>
              <p className="text-[#656565] mb-0">Add when you want to go </p>
            </div>
          </div>
        )}
        <div className="bg-[#ddd] h-9 w-[1px]"></div>
        <div
          className={`flex ${
            clickedButton === '4'
              ? 'bg-white shadow-2xl scale-105'
              : 'hover:bg-[#ebebeb]'
          } w-2/6 rounded-full pl-9 pr-2 py-2 transition-colors duration-200 justify-between`}
          onClick={() => {
            if (clickedButton === '4') {
              setClickedButton(null);
            } else {
              setClickedButton('4');
            }
          }}
        >
          <div className="w-[170px]">
            <p className="text-[#222222] mb-0 font-semibold">Who</p>
            <p className="text-[#656565] mb-0">Add guests</p>
          </div>
          <motion.div
            animate={clickedButton != null ? 'open' : 'closed'}
            transition={{ ease: 'linear', duration: 0.3 }}
            variants={variants}
            className={`p-2 rounded-full !ml-7 ${
              clickedButton != null ? 'bg-[#e31c5f]' : 'bg-[#ff385c]'
            } flex items-center justify-center`}
          >
            <AiOutlineSearch size={22} cursor="pointer" color="white" />{' '}
            {clickedButton != null && (
              <p className="text-white mb-0 ml-2">Search</p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SearchTabPanel;
