import React from 'react';
import Header from './header';
import NavFilter from './navFilter';
import Main from './main/index';

function HomeComponent() {
  return (
    <>
      <Header />
      <NavFilter />
      <Main />
    </>
  );
}

export default HomeComponent;
