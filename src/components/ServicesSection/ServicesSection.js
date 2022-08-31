import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ServicesSec, ContactSection, ContactHeader, ContactPhoneNumber, ContactEmail, ServicesListSec, ListTitle, ServicesList, Services, ServicesTagline } from './ServicesSection.elements';
import './ServicesSectionStyles.css';
import CardFlip from '../CardFlip/CardFlip';
import  '../CardFlip/CardFlip.css';

const ServicesSection = () => {
  return(
    <>
      <ServicesSec>
        <Container>
          <ContactSection>
            <Row>
              <Col>
                <ContactHeader>For Quotes & Questions:</ContactHeader>
              </Col>
              <Col lg>
                <ContactPhoneNumber>(360) 867-5309</ContactPhoneNumber>
              </Col>
              <Col lg>
                <ContactEmail>example@example.com</ContactEmail>
              </Col>
            </Row>
          </ContactSection>
        </Container>
        <hr className="styled-hr" />
        <div className='services-card-flip'>
          <CardFlip 
          img="https://images.pexels.com/photos/13095955/pexels-photo-13095955.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          text="TEST TEXT"
          img2="https://images.pexels.com/photos/11590268/pexels-photo-11590268.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          textFlipped="TEST TEXT2" />
        </div>
        <ServicesListSec>
          <ListTitle>Services</ListTitle>
          <ServicesList>
            <ServicesTagline>"Whatever your homes throws we will catch."</ServicesTagline>
            <Services></Services>
          </ServicesList>
        </ServicesListSec>
      </ServicesSec>
    </>
  )
};

export default ServicesSection;