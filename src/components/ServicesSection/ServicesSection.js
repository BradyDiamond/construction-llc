import React from 'react';
import { ServicesSec, ServicesTagline } from './ServicesSection.elements';
import './ServicesSectionStyles.css';
import CardFlip from '../CardFlip/CardFlip';
import Map from '../CardFlip/img/service-area-map.png';
import GalleryCardFlip from '../CardFlip/GalleryCardFlip';

const ServicesSection = () => {
  return(
    <>
      <ServicesSec>      
        <hr className="styled-hr" />        
        <div className='services-card-flip' id="about">
          <div className='services-tagline'>
            <ServicesTagline>
              <img src="" alt="" />
            </ServicesTagline>
          </div>
          <CardFlip 
          img="https://images.unsplash.com/photo-1586864387789-628af9feed72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          text="about us"
          img2="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
          textFlipped0="Lorem ipsum dolor sit amet-"
          textFlipped1="consectetur adipiscing elit-"
          textFlipped2="Ut cursus enim id suscipit pretiumr-"
          textFlipped3="met consectetur dolor finibus vitae-"
          textFlipped4="Ngravida laoreet ante nec sollicitudin-"
          textFlipped5="Donec nisl urna, iaculis qui-" 
          textFlipped6="CALL (360)555-5555 FOR A QUOTE!-"/>
          <br/>
          <div className='services-tagline'>
          <ServicesTagline></ServicesTagline>
          </div>
          <div className='services-card-flip' id='services'>
            <CardFlip 
            img="https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80"
            text="services"
            img2="https://images.unsplash.com/photo-1562408589-4b96d09ec657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            img3="https://images.unsplash.com/photo-1562408589-4b96d09ec657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            textFlipped0="Window And Glass Specialists-"        
            textFlipped1="Roof and Exterior Cleaning-"
            textFlipped2="Gutter Cleaning & Repair-"
            textFlipped3="Deck Construction & Repair-"
            textFlipped5="Ngravida laoreet ante nec sollicitudin-"     
            textFlipped4="Dry Rot Repair-"
            textFlipped6="-(360)555-5555-"/>
          </div> 
          <br/>
          <div className='services-tagline'>
            <ServicesTagline></ServicesTagline>
          </div>
          <div className='services-card-flip-map' id='map'>
            <CardFlip 
            img="https://images.unsplash.com/photo-1567361809214-b97d828071d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80"
            text="map"
            img3={Map}
            textFlipped0="SE Portland-"
            textFlipped1="Clackamas-"
            textFlipped2="Oregon City-"
            textFlipped3="Lake Oswego-"
            textFlipped4="Beavercreek-"
            textFlipped5="Mollalla-" 
            textFlipped6="CALL (360)555-5555 FOR A QUOTE!-"/>
          </div>
          <br/> 
          <div className='services-tagline'>
            <ServicesTagline></ServicesTagline>
          </div>
          <div className='services-card-flip' id='gallery'>
            <GalleryCardFlip 
            img="https://images.unsplash.com/photo-1426927308491-6380b6a9936f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            text="gallery"
        />
          </div> 
          <br/>          
          <div className='services-tagline'>
            <ServicesTagline><img src='' alt="" /></ServicesTagline>
           
          </div>
        </div>   
      </ServicesSec>
    </>
  )
};

export default ServicesSection;