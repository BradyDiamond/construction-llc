import React from 'react';
import ServicesSection from '../../ServicesSection/ServicesSection';
import PhotoBanner from '../../PhotoBanner/PhotoBanner';
import BusinessSection from '../../BusinessSection/BusinessSection';
import '../../App.css';


const Home = () => {

  return (
    <>
      
      <PhotoBanner />     
      <ServicesSection  />      
      <BusinessSection />
      
    </>
  );
};

export default Home;