import React from 'react';
import { Card, Image } from 'antd';
import Icon from '../../../src/Icon';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper';
import CardImage from './cardImage';

interface CardItemProps {
  place: string;
  location: string;
  availableDates: string;
  price: string;
  time: string;
  images: Array<string>;
  starPoint: string;
}

const CardItem: React.FC<CardItemProps> = ({
  availableDates,
  location,
  place,
  price,
  time,
  images,
  starPoint,
}: CardItemProps) => {
  return (
    <div className="cursor-pointer">
      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          modules={[Navigation, Mousewheel]}
        >
          {images?.map((image, i) => (
            <SwiperSlide key={i}>
              <CardImage imgURL={image} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <div className="flex justify-between items-center">
            <h5 className="font-semibold mb-0">{place}</h5>
            <div className="flex items-center justify-center space-x-1">
              <Icon name="star" />
              <span>{starPoint}</span>
            </div>
          </div>
          <p className="text-[#757371] mb-0">{location}</p>
          <p className="text-[#757371] mb-0">{availableDates}</p>
          <span className="flex items-center space-x-1">
            <p className="font-semibold mb-0">{price}</p>
            <p className="mb-0">{time}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
