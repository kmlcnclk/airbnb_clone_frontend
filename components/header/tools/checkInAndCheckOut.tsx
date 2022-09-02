import { DatePicker } from 'antd';
import React from 'react';
import Icon from '../../../src/Icon';
import GoAnyTimeItem from './goAnyTimeItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

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
  const monthsAndYears = [
    { month: 'September', year: 2022 },
    { month: 'October', year: 2022 },
    { month: 'November', year: 2022 },
    { month: 'December', year: 2022 },
    { month: 'January', year: 2023 },
    { month: 'February', year: 2023 },
    { month: 'March', year: 2023 },
    { month: 'April', year: 2023 },
    { month: 'May', year: 2023 },
    { month: 'June', year: 2023 },
    { month: 'July', year: 2023 },
    { month: 'August', year: 2023 },
  ];

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
              <h3 className="font-semibold text-lg">
                Stay for a {flexibleStayForWeekState.toLocaleLowerCase()}
              </h3>
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
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              slidesPerGroup={2}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {monthsAndYears.map((item, i) => (
                <SwiperSlide key={i}>
                  <GoAnyTimeItem
                    month={item.month}
                    year={item.year}
                    goAnyTimeStates={goAnyTimeStates}
                    setGoAnyTimeStates={setGoAnyTimeStates}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckInAndCheckOut;
