import { Image } from 'antd';
import React from 'react';

interface GoAnyTimeItemProps {
  month: string;
  year: number;
  goAnyTimeStates: Array<string>;
  setGoAnyTimeStates: Function;
}

const GoAnyTimeItem: React.FC<GoAnyTimeItemProps> = ({
  month,
  year,
  goAnyTimeStates,
  setGoAnyTimeStates,
}: GoAnyTimeItemProps) => {
  console.log(goAnyTimeStates);

  return (
    <div
      className={`min-w-[120px] min-h-[134px] rounded-2xl flex flex-col justify-center items-center space-y-1 my-auto cursor-pointer transition-all duration-200 ${
        goAnyTimeStates?.includes(month)
          ? 'border-2 border-[#222]'
          : 'border border-[#d7d7d7] hover:border-[#222]'
      }`}
      onClick={() => {
        if (goAnyTimeStates?.includes(month)) {
          setGoAnyTimeStates((prevState: Array<string>) => {
            const result: Array<string | null> = prevState.filter(
              (prevS: string) => prevS != month
            );
            if (result) {
              return result;
            }
            return [];
          });
        } else {
          setGoAnyTimeStates((prevState: Array<string> | any) => [
            ...prevState,
            month,
          ]);
        }
      }}
    >
      <Image
        src={
          goAnyTimeStates?.includes(month)
            ? 'https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg'
            : 'https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg'
        }
        alt="Calendar"
        width={32}
        preview={false}
        height={32}
      />
      <p>{month}</p>
      <p>{year}</p>
    </div>
  );
};

export default GoAnyTimeItem;
