import { DatePicker, Image } from 'antd';
import React from 'react';
import Icon from '../../../src/Icon';

interface CheckInAndCheckOutProps {
  chooseDateState: string;
  setChooseDateState: Function;
  dateFilterState: string;
  setDateFilterState: Function;
  flexibleStayForWeekState: string;
  setFlexibleStayForWeekState: Function;
  goAnyTimeStates: Array<string>;
  setGoAnyTimeStates: Function;
}

const CheckInAndCheckOut: React.FC<CheckInAndCheckOutProps> = ({
  chooseDateState,
  setChooseDateState,
  dateFilterState,
  setDateFilterState,
  flexibleStayForWeekState,
  setFlexibleStayForWeekState,
  goAnyTimeStates,
  setGoAnyTimeStates,
}: CheckInAndCheckOutProps) => {
  console.log(goAnyTimeStates);

  return (
    <div className="relative">
      <div className="h-auto w-[848px] bg-white absolute left-[230px] rounded-3xl top-2 px-10 py-9">
        <div className="w-full flex justify-center items-center">
          <div className="bg-[#ebebeb] p-1 w-[303px] rounded-full shadow-sm flex items-center justify-center">
            <button
              className={`w-1/2 ${
                chooseDateState === 'Choose dates' ? 'bg-white' : 'bg-[#ebebeb]'
              } hover:bg-white rounded-full transition-colors duration-200 font-semibold p-2`}
              onClick={() => setChooseDateState('Choose dates')}
            >
              <span>Choose dates</span>
            </button>
            <button
              className={`w-1/2 ${
                chooseDateState === "I'm flexible" ? 'bg-white' : 'bg-[#ebebeb]'
              } hover:bg-white rounded-full transition-colors duration-200 font-semibold p-2`}
              onClick={() => setChooseDateState("I'm flexible")}
            >
              <span>I&apos;m flexible</span>
            </button>
          </div>
        </div>
        {chooseDateState === 'Choose dates' ? (
          <div>
            <div className="flex justify-center items-center w-full mt-6">
              <DatePicker.RangePicker
                getPopupContainer={(trigger: any) => trigger.parentNode}
                dropdownClassName="absolute"
              />
            </div>
            <div className="space-x-2 mt-6 mx-3 mb-3 flex items-center justify-center">
              <button
                className={`rounded-full p-2 text-xs ${
                  dateFilterState === 'Exact dates'
                    ? 'border-black border-2'
                    : 'border border-[#dddddd]'
                }`}
                onClick={() => setDateFilterState('Exact dates')}
              >
                <span className="flex items-center justify-center">
                  Exact dates
                </span>
              </button>
              <button
                className={`rounded-full p-2 text-xs ${
                  dateFilterState === '1 day'
                    ? 'border-black border-2'
                    : 'border border-[#dddddd]'
                }`}
                onClick={() => setDateFilterState('1 day')}
              >
                <span className="flex items-center justify-center">
                  <Icon name="plusMinus" size={12} color="#000" />1 day
                </span>
              </button>
              <button
                className={`rounded-full p-2 text-xs ${
                  dateFilterState === '2 days'
                    ? 'border-black border-2'
                    : 'border border-[#dddddd]'
                }`}
                onClick={() => setDateFilterState('2 days')}
              >
                <span className="flex items-center justify-center">
                  <Icon name="plusMinus" size={12} color="#000" />2 days
                </span>
              </button>
              <button
                className={`rounded-full p-2 text-xs ${
                  dateFilterState === '3 days'
                    ? 'border-black border-2'
                    : 'border border-[#dddddd]'
                }`}
                onClick={() => setDateFilterState('3 days')}
              >
                <span className="flex items-center justify-center">
                  <Icon name="plusMinus" size={12} color="#000" />3 days
                </span>
              </button>
              <button
                className={`rounded-full p-2 text-xs ${
                  dateFilterState === '7 days'
                    ? 'border-black border-2'
                    : 'border border-[#dddddd]'
                }`}
                onClick={() => setDateFilterState('7 days')}
              >
                <span className="flex items-center justify-center">
                  <Icon name="plusMinus" size={12} color="#000" />7 days
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-center mt-8">
              <h3 className="font-semibold text-lg">Stay for a week</h3>
            </div>
            <div className="space-x-2 mx-3 mb-3 flex items-center justify-center">
              <button
                className={`rounded-full p-2 px-3 text-sm ${
                  flexibleStayForWeekState === 'Weekend'
                    ? 'border-black border-2'
                    : 'border border-[#dddddd]'
                }`}
                onClick={() => setFlexibleStayForWeekState('Weekend')}
              >
                <span className="flex items-center justify-center">
                  Weekend
                </span>
              </button>
              <button
                className={`rounded-full p-2 px-3 text-sm ${
                  flexibleStayForWeekState === 'Week'
                    ? 'border-black border-2'
                    : 'border border-[#dddddd]'
                }`}
                onClick={() => setFlexibleStayForWeekState('Week')}
              >
                <span className="flex items-center justify-center">Week</span>
              </button>
              <button
                className={`rounded-full p-2 px-3 text-sm ${
                  flexibleStayForWeekState === 'Month'
                    ? 'border-black border-2'
                    : 'border border-[#dddddd]'
                }`}
                onClick={() => setFlexibleStayForWeekState('Month')}
              >
                <span className="flex items-center justify-center">Month</span>
              </button>
            </div>
            <div className="flex items-center justify-center mt-8">
              <h3 className="font-semibold text-lg">Go anytime</h3>
            </div>
            <div>
              <div
                className={`w-[120px] h-[134px] rounded-2xl flex flex-col justify-center items-center space-y-1 my-auto cursor-pointer transition-all duration-200 ${
                  goAnyTimeStates?.includes('September')
                    ? 'border-2 border-[#222]'
                    : 'border border-[#d7d7d7] hover:border-[#222]'
                }`}
                onClick={() => {
                  if (goAnyTimeStates?.includes('September')) {
                    setGoAnyTimeStates((prevState: Array<string>) =>
                      prevState.find((prevS: string) => prevS != 'September')
                        ? prevState.find(
                            (prevS: string) => prevS != 'September'
                          )
                        : []
                    );
                  } else {
                    setGoAnyTimeStates((prevState: Array<string> | any) => [
                      ...prevState,
                      'September',
                    ]);
                  }
                }}
              >
                <Image
                  src={
                    goAnyTimeStates?.includes('September')
                      ? 'https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg'
                      : 'https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg'
                  }
                  alt="Calendar"
                  width={32}
                  preview={false}
                  height={32}
                />
                <p>September</p>
                <p>2022</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckInAndCheckOut;
