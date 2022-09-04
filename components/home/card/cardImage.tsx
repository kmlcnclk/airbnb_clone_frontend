import { Image } from 'antd';
import React from 'react';
import Icon from '../../../src/Icon';

interface CardImageProps {
  imgURL: string;
}

const CardImage: React.FC<CardImageProps> = ({ imgURL }) => {
  return (
    <div className="relative">
      <Image
        src={imgURL}
        alt="image"
        className="rounded-xl !object-cover "
        preview={false}
        width="100%"
        height="265px"
      />
      <div className="absolute top-3 right-3 active:scale-95 duration-300">
        <Icon name="heart" size={24} />
      </div>
    </div>
  );
};

export default CardImage;
