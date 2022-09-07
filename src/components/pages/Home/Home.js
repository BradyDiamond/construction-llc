import React, { useRef, useState, useEffect } from 'react'
import ServicesSection from '../../ServicesSection/ServicesSection';
import AutoScrollCarousel from '../../AutoScrollCarousel/AutoScrollCarousel';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PhotoBanner from '../../PhotoBanner/PhotoBanner';
import { SocialIcons, SocialIconLink, SocialHeaderSec, LinkSec, EmailAddress, PhoneNumber, MobileSocialIcons } from '../../Header/Header.elements';
import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';
import { BsGoogle, BsTelephoneFill } from 'react-icons/bs';
import '../../App.css';
import FakeBodyForTest  from '../../FakeBodyForTest';

const Home = () => {

  // Setup for displaying phone number and email when top nav gets hidden

  const [showMobileIconsOnScroll, setShowMobileIconsOnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setShowMobileIconsOnScroll(true);
      } else {
        setShowMobileIconsOnScroll(false);
      }
    });
  }, []);

  // Setup for scroll to section with navbar link clicks
  // You can add or change the snap by adding or removing href from section div and adding new variable here
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
    {/* Top Navbar (disappears on scroll) */}
      <SocialHeaderSec ref={home}>
        <LinkSec>
          <PhoneNumber href="tel:9714010079">
            <BsTelephoneFill style={{ marginRight: '5px'}} />
            CALL NOW (971)-401-0079</PhoneNumber>
          <EmailAddress href = "mailto: nickworrall0910@gmail.com">
            <AiOutlineMail style={{ marginRight: '5px', fontSize: '18px'}} />
            EMAIL: NICKWORRALL0910@GMAIL.COM
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

      {/* Second Navbar */}
      <Navbar expand='md' sticky='top' style={{ background: '#3888C7', fontWeight: 'bold', border: '1px black', borderBottomStyle: 'solid'}}>
        
        <Nav.Link onClick={() => scrollToSection(home)}>
          <Navbar.Brand style={{ marginLeft: '30px', marginRight: '20px', color: 'rgba(0, 0, 0, 0.6)' }}>
            <img src='images/logo/small-logo.webp' alt="small logo for Worrall Contractors" className="navbar-logo" />
          Worrall Contractors</Navbar.Brand>
        </Nav.Link>

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
          <SocialIconLink href='tel:9714010079'>
            <BsTelephoneFill />
          </SocialIconLink>
          <SocialIconLink href="mailto: nickworrall0910@gmail.com">
            <AiOutlineMail />
          </SocialIconLink>
        </MobileSocialIcons>

        {/* LINKS - Home, Services, etc..  */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollToSection(home)}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(services)}>Services</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(gallery)} >Gallery</Nav.Link>
          </Nav>

          <Container style={{ textAlign: 'right' }}>
            <Row>
              
              {/* On scroll these will display next to links */}
                {
                  showMobileIconsOnScroll && (
                    <>
                      <Col xl={true}>
                        <PhoneNumber href="tel:4714010079" className='second-navbar-email-phone'>
                        <BsTelephoneFill style={{ marginRight: '5px'}} className='second-navbar-email-phone' />
                        CALL NOW (971)-401-0079</PhoneNumber>
                      </Col>
                      <Col xl={true}>
                        <EmailAddress href = "mailto: nickworrall0910@gmail.com" className='second-navbar-email-phone'>
                        <AiOutlineMail style={{ marginRight: '5px', fontSize: '18px'}} className='second-navbar-email-phone'/>
                        EMAIL: NICKWORRALL0910@GMAIL.COM
                        </EmailAddress>
                      </Col>
                    </>    
                  )
                }

            </Row>
          </Container>
        </Navbar.Collapse>
      </Navbar>

      {/* Sections Begin Here */}
      {/* <div className='photo-banner'>
        <PhotoBanner />
      </div>
      <div className="services" ref={services}>
        <ServicesSection />
        <AutoScrollCarousel />
      </div> */}
      <FakeBodyForTest />
      <FakeBodyForTest />
      <FakeBodyForTest />
    </>
  );
};

export default Home;