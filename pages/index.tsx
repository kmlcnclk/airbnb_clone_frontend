import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import NavFilter from '../components/navFilter';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vacation Homes & Condo Rentals - Airbnb - Airbnb</title>
        <meta
          name="description"
          content="Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb."
        />
        <link rel="icon" href="/airbnb_logo.png" />
      </Head>
      <Header />
      <NavFilter />
    </div>
  );
};

export default Home;
