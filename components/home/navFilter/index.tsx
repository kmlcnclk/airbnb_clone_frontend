import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Image } from 'antd';
import filterData from '../../../src/filterData.json';
import Icon from '../../../src/Icon';

const NavFilter = () => {
  const [filterState, setFilterState] = useState('National parks');

  return (
    <nav className="nav px-24 py-5 flex items-center justify-between space-x-5">
      <Swiper
        slidesPerView={11}
        spaceBetween={5}
        slidesPerGroup={7}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {filterData.map((item, i) => (
          <SwiperSlide
            key={i}
            className={`flex flex-col items-center justify-center space-y-2 ${
              filterState === item.text
                ? 'border-b-2 border-black'
                : 'hover:border-[#ddd] hover:border-b-2 transition-colors  contrast-[0.25] hover:contrast-100 cursor-pointer'
            }  py-3 w-min active:scale-95 duration-300`}
            onClick={() => setFilterState(item.text)}
          >
            <Image
              src={item.imgURL}
              alt="image"
              width="24px"
              height="24px"
              preview={false}
            />
            <p className="text-black font-semibold text-xs">{item.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button className="flex items-center mb-[14px] justify-center px-4 py-3 space-x-3 border border-[#ddd] rounded-xl">
          <Icon name="filter" color="#222" />
          <span className='text-sm'>Filters</span>
        </button>
      </div>
    </nav>
  );
};

export default NavFilter;
