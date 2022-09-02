import React from 'react';
import Icon from '../../../src/Icon';
import { Divider } from 'antd';
import WhoPopupMenuItem from './whoPopupMenuItem';

interface WhoPopupMenuProps {
  adultCounter: number;
  setAdultCounter: Function;
  childCounter: number;
  setChildCounter: Function;
  infantCounter: number;
  setIinfantCounter: Function;
  petCounter: number;
  setPetCounter: Function;
}

const WhoPopupMenu: React.FC<WhoPopupMenuProps> = ({
  adultCounter,
  setAdultCounter,
  childCounter,
  setChildCounter,
  infantCounter,
  setIinfantCounter,
  petCounter,
  setPetCounter,
}: WhoPopupMenuProps) => {
  return (
    <div className="relative">
      <div className="w-auto h-auto bg-white absolute right-[230px] rounded-3xl top-2 px-10 py-7 overflow-y-auto">
        <WhoPopupMenuItem
          state={adultCounter}
          setState={setAdultCounter}
          header="Adults"
          text="Ages 13 or above"
        />
        <Divider type="horizontal" className="border-t !border-[#ebebeb] !my-5" />
        <WhoPopupMenuItem
          state={childCounter}
          setState={setChildCounter}
          header="Children"
          text="Ages 2-12"
        />
        <Divider type="horizontal" className="border-t !border-[#ebebeb] !my-5" />
        <WhoPopupMenuItem
          state={infantCounter}
          setState={setIinfantCounter}
          header="Infants"
          text="Under 2"
        />
        <Divider type="horizontal" className="border-t !border-[#ebebeb] !my-5" />
        <WhoPopupMenuItem
          state={petCounter}
          setState={setPetCounter}
          header="Pets"
          text="Bringing a service animal?"
        />
      </div>
    </div>
  );
};

export default WhoPopupMenu;
