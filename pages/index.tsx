import type { NextPage } from 'next';
import Head from 'next/head';
import HomeComponent from '../components/home/index';

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
      <HomeComponent />
    </div>
  );
};

export default Home;
