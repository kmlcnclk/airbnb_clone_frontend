import React from 'react';
import NextImage from 'next/image';

interface HeaderMenuWhereItemProps {
  url: string;
  text: string;
}

const HeaderMenuWhereItem: React.FC<HeaderMenuWhereItemProps> = ({
  url,
  text,
}: HeaderMenuWhereItemProps) => {
  return (
    <div className="space-y-1">
      <div className="rounded-xl border w-[124px] h-[124px] border-[#dddddd] hover:border-black cursor-pointer transition-all duration-300">
        <NextImage
          src={url}
          alt="Flexible"
          width="124px"
          height="124px"
          objectFit="contain"
          className="rounded-xl"
          priority={true}
        />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default HeaderMenuWhereItem;
