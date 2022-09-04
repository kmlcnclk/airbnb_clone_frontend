import React from 'react';
import CardItem from '../card';
import cardData from '../../../src/cardData.json';

const Main = () => {
  return (
    <main className="main">
      <div className="grid grid-cols-4 gap-6 px-24">
        {cardData?.map((data, i) => (
          <CardItem key={i} {...data} />
        ))}
      </div>
    </main>
  );
};

export default Main;
