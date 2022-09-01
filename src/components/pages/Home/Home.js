import React, { useRef } from 'react'
import ServicesSection from '../../ServicesSection/ServicesSection';
import AutoScrollCarousel from '../../AutoScrollCarousel/AutoScrollCarousel';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PhotoBanner from '../../PhotoBanner/PhotoBanner';
import Gallery from '../../Gallery/Gallery';
import { SocialIcons, SocialIconLink, SocialHeaderSec, LinkSec, EmailAddress, PhoneNumber, MobileSocialIcons } from '../../Header/Header.elements';
import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';
import { BsGoogle, BsTelephoneFill } from 'react-icons/bs';
import '../../Header/HeaderStyles.css';
import '../../App.css';

const Home = () => {

  const services = useRef(null);
  const gallery = useRef(null);
  const home = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <>
    {/* Navbar Components */}
      <SocialHeaderSec>
        <LinkSec>
          <PhoneNumber href="tel:360867-5309">
            <BsTelephoneFill style={{ marginRight: '5px'}} />
            CALL NOW (360)867-5309</PhoneNumber>
          <EmailAddress href = "mailto: example@example.com">
            <AiOutlineMail style={{ marginRight: '5px', fontSize: '18px'}} />
            EMAIL: example@example.com
            </EmailAddress>
        </LinkSec>
        <SocialIcons>
          <SocialIconLink href={'//www.facebook.com'} target="_blank" aria-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href={'//www.youtube.com'} target="_blank" aria-label="Youtube">
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink href={'//www.google.com'} target="_blank" aria-label="Google">
            <BsGoogle />
          </SocialIconLink>
        </SocialIcons>
      </SocialHeaderSec> 
      <Navbar expand='md' sticky='top' style={{ background: '#3888C7', fontWeight: 'bold'}}>

      <Navbar.Brand style={{ marginLeft: '35px', marginRight: '20px', color: 'rgba(0, 0, 0, 0.6)' }} className='mobile-brand-style' href="/">Contractors LLC</Navbar.Brand>
        <Container>

            {/* Mobile Icons Section - will display on mobile only while the desktop view gets hidden */}
            <MobileSocialIcons className="mobile-socials">
              <SocialIconLink href={'//www.facebook.com'} target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href={'//www.youtube.com'} target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href={'//www.google.com'} target="_blank" aria-label="Google">
                <BsGoogle />
              </SocialIconLink>
              <SocialIconLink href='tel:3608675309'>
                <BsTelephoneFill />
              </SocialIconLink>
              <SocialIconLink href="mailto: example@example.com">
                <AiOutlineMail />
              </SocialIconLink>
            </MobileSocialIcons>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => scrollToSection(home)}>Home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(services)}>Services</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(gallery)} >Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

          {/* Sections Begin Here */}
      <div className='home' ref={home}>
        <PhotoBanner />
      </div>
      <div className="services" ref={services}>
        <ServicesSection />
        <AutoScrollCarousel />
      </div>
      <div className="gallery" ref={gallery}>
        <Gallery />
      </div>
    </>
  );
};

 export default Home;