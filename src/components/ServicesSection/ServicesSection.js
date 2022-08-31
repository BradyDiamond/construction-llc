import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { ServicesSec, ContactSection, ContactHeader, ContactPhoneNumber, ContactEmail, ServicesListSec, ListTitle, ServicesList, Services, ServicesTagline } from './ServicesSection.elements';
import './ServicesSectionStyles.css';
import CardFlip from '../CardFlip/CardFlip';
import  '../CardFlip/CardFlip.css';

const ServicesSection = () => {
  return(
    <>
      <ServicesSec>

        {/* Contact Section */}
        <Container>
          <ContactSection>
            <Row>
              <Col>
                <ContactHeader>For Questions & Quotes:</ContactHeader>
              </Col>
              <Col lg>
                <ContactPhoneNumber><a href="tel: 3608675309" className='services-link'>(360) 867-5309</a></ContactPhoneNumber>
              </Col>
              <Col lg>
                <ContactEmail><a href=" mailto: example@example.com" className='services-link'>example@example.com</a></ContactEmail>
              </Col>
            </Row>
          </ContactSection>
        </Container>
        <hr className="styled-hr" />    

        {/* Services List Section */}
        <ServicesListSec>
          <Container>
            <Card style={{ background: '#3888C7', padding: '40px' }}>
              <ListTitle>Services</ListTitle>
              <ServicesTagline>"Whatever Your Home Throws, We'll Catch It."</ServicesTagline>
              <Row>
                <Col lg>
                  <ServicesList>
                    <Services>Kitchen Remodeling</Services>
                    <Services>Bathroom Remodeling</Services>
                    <Services>Touch-Up Painting</Services>
                    <Services>Flooring (Hardwood/Tile)</Services>
                    <Services>Window/Glass Replacement</Services>
                  </ServicesList>
                </Col>
                <Col lg>
                  <ServicesList>
                    <Services>Roof Repairs</Services>
                    <Services>Dry Rot Repair</Services>
                    <Services>Pressure Washing</Services>
                    <Services>New/Repair Decks</Services>
                    <Services>New/Repair Fences</Services>
                  </ServicesList>
                </Col>
                <Col lg>
                  <div className='services-card-flip'>
                    <CardFlip 
                    img="https://images.pexels.com/photos/13095955/pexels-photo-13095955.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    text="TEST TEXT"
                    img2="https://images.pexels.com/photos/11590268/pexels-photo-11590268.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    textFlipped="TEST TEXT2" />
                  </div>
                </Col>
              </Row>
            </Card>
          </Container>
        </ServicesListSec>
      </ServicesSec>
    </>
  )
};

export default ServicesSection;