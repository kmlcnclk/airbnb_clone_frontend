import React from 'react';
import { DatePicker } from 'antd';

interface DatePopupMenu {}

const DatePopupMenu: React.FC<DatePopupMenu> = ({}: DatePopupMenu) => {
  return (
    <div className="relative">
      <div className="w-fit h-auto bg-white absolute left-[474px] rounded-3xl top-2 px-10 py-7">
        <div className="flex justify-center items-center">
          <DatePicker.RangePicker
            getPopupContainer={(trigger: any) => trigger.parentNode}
            dropdownClassName="absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default DatePopupMenu;
