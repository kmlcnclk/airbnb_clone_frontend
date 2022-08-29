import { DatePicker } from 'antd';
import React from 'react';
import Icon from '../../../src/Icon';

interface CheckInAndCheckOutProps {
  chooseDateState: string;
  setChooseDateState: Function;
  dateFilterState: string;
  setDateFilterState: Function;
}

const CheckInAndCheckOut: React.FC<CheckInAndCheckOutProps> = ({
  chooseDateState,
  setChooseDateState,
  dateFilterState,
  setDateFilterState,
}: CheckInAndCheckOutProps) => {
  return (
    <div className="relative">
      <div className="h-auto w-[848px] bg-white absolute left-[230px] rounded-3xl top-2 px-14 py-9">
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
    </div>
  );
};

export default CheckInAndCheckOut;
