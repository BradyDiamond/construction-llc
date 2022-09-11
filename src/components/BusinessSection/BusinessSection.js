import React from 'react';
import { BusinessSec, BusinessImage } from './BusinessSection.elements';
import AutoScrollCarousel from '../AutoScrollCarousel/AutoScrollCarousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const BusinessSection = () => {
  return (
    <>
      <BusinessSec>
        <AutoScrollCarousel />
        <Container>
          <Card style={{ marginBottom: '50px'}}>
            <BusinessImage src='images/logo/business-card.webp' alt='Business Card for Nick Worrall, licensed contractor. Displays a phone number, 9714010079, and an email address, nickworrall0910@gmail.com.' />
          </Card>
        </Container>
      </BusinessSec>
    </>
  )
};

export default BusinessSection;