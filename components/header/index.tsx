import React, { useState } from 'react';
import Icon from '../../src/Icon';
import { AiOutlineSearch } from 'react-icons/ai';
import { Divider, Drawer } from 'antd';
import SearchTabPanel from './tools/searchTabPanel';
import WherePopupMenu from './tools/wherePopupMenu';
import HeaderExtra from './tools/headerExtra';
import RightSide from './tools/rightSide';
import CheckInAndCheckOut from './tools/checkInAndCheckOut';
import WhoPopupMenu from './tools/whoPopupMenu';
import DatePopupMenu from './tools/datePopupMenu';

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [tabValue, setTabValue] = useState('1');
  const [clickedButton, setClickedButton] = useState<string | null>('1');
  const [chooseDateState, setChooseDateState] =
    useState<string>('Choose dates');
  const [dateFilterState, setDateFilterState] = useState<string>('Exact dates');
  const [flexibleStayForWeekState, setFlexibleStayForWeekState] =
    useState<string>('Week');
  const [goAnyTimeStates, setGoAnyTimeStates] = useState<Array<string>>([]);
  const [adultCounter, setAdultCounter] = useState<number>(0);
  const [childCounter, setChildCounter] = useState<number>(0);
  const [infantCounter, setInfantCounter] = useState<number>(0);
  const [petCounter, setPetCounter] = useState<number>(0);

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
          extra={
            <HeaderExtra
              setTabValue={setTabValue}
              setClickedButton={setClickedButton}
            />
          }
        >
          {tabValue === '1' && (
            <SearchTabPanel
              clickedButton={clickedButton}
              setClickedButton={setClickedButton}
              chooseDateState={chooseDateState}
              flexibleStayForWeekState={flexibleStayForWeekState}
              tabValue={tabValue}
            />
          )}
          {tabValue === '2' && (
            <SearchTabPanel
              clickedButton={clickedButton}
              setClickedButton={setClickedButton}
              chooseDateState={chooseDateState}
              flexibleStayForWeekState={flexibleStayForWeekState}
              tabValue={tabValue}
            />
          )}
          {visible && clickedButton === '1' && <WherePopupMenu />}
          {visible && (clickedButton === '2' || clickedButton === '3') && (
            <CheckInAndCheckOut
              chooseDateState={chooseDateState}
              setChooseDateState={setChooseDateState}
              dateFilterState={dateFilterState}
              setDateFilterState={setDateFilterState}
              flexibleStayForWeekState={flexibleStayForWeekState}
              setFlexibleStayForWeekState={setFlexibleStayForWeekState}
              goAnyTimeStates={goAnyTimeStates}
              setGoAnyTimeStates={setGoAnyTimeStates}
            />
          )}
          {visible && clickedButton === '4' && (
            <WhoPopupMenu
              adultCounter={adultCounter}
              setAdultCounter={setAdultCounter}
              childCounter={childCounter}
              setChildCounter={setChildCounter}
              infantCounter={infantCounter}
              setIinfantCounter={setInfantCounter}
              petCounter={petCounter}
              setPetCounter={setPetCounter}
            />
          )}
          {visible && clickedButton === '5' && <DatePopupMenu />}
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
            <button
              className="font-semibold text-[#222] border-r px-5 border-[#dddddd]"
              onClick={() => setClickedButton('1')}
            >
              Anywhere
            </button>
            <button
              className="font-semibold text-[#222] border-r px-5 border-[#dddddd]"
              onClick={() => setClickedButton('2')}
            >
              Any week
            </button>
            <div className="flex items-center">
              <button
                className="font-semibold text-[#717171] px-5"
                onClick={() => setClickedButton('4')}
              >
                Add guests
              </button>
              <div
                className="bg-[#ff385c] w-8 h-8 rounded-full flex items-center justify-center"
                onClick={() => setClickedButton('1')}
              >
                <AiOutlineSearch size={18} cursor="pointer" color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-end">
          <RightSide />
        </div>
      </header>
    </>
  );
};

export default Header;
