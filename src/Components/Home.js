import React from 'react';
import Intro from './Intro';
import Intro2 from './Intro2';
import Carousel from './Carousel';
import Plan from './Plan'
import FeaturesSection from './FeaturesSection';
import Appstore from './Appstore';

const Home = () => {
  return (
    <>
    <Intro/>
    <Intro2/>
    <FeaturesSection/>
    <Carousel/>
    <Plan/>
    <Appstore/>
    </>
  );
};

export default Home;
