import React from 'react';
import Icon from '../../../src/Icon';

interface WhoPopupMenuItemProps {
  state: number;
  setState: Function;
  header: string;
  text: string;
}

const WhoPopupMenuItem: React.FC<WhoPopupMenuItemProps> = ({
  state,
  setState,
  header,
  text,
}: WhoPopupMenuItemProps) => {
  return (
    <div className="flex items-center justify-between w-[340px]">
      <div className="space-y-2">
        <h5 className="font-semibold text-base m-0">{header}</h5>
        <p
          className={`${
            text === 'Bringing a service animal?' && 'underline cursor-pointer'
          } text-[#717171] m-0 text-sm`}
        >
          {text}
        </p>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <div
          onClick={() => state !== 0 && setState((pre: number) => pre - 1)}
          className={`${
            state === 0
              ? 'border-[#ebebeb] cursor-not-allowed'
              : 'border-[#b5b5b5] cursor-pointer hover:border-[#222]'
          } border rounded-full w-min p-2 transition-colors duration-200`}
        >
          <Icon
            name="minus"
            color={state === 0 ? '#ebebeb' : '#222222'}
            size={12}
          />
        </div>
        <p className="m-0">{state}</p>
        <div
          className="border border-[#b5b5b5] rounded-full w-min p-2 cursor-pointer hover:border-[#222] transition-colors duration-200"
          onClick={() => setState((pre: number) => pre + 1)}
        >
          <Icon name="plus" color="#222222" size={12} />
        </div>
      </div>
    </div>
  );
};

export default WhoPopupMenuItem;
