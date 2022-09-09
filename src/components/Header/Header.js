import React, { useState, useEffect } from 'react';
import { SocialIcons, SocialIconLink, SocialHeaderSec, LinkSec, EmailAddress, PhoneNumber, MobileSocialIcons } from './Header.elements';
import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';
import { BsGoogle, BsTelephoneFill } from 'react-icons/bs';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { animateScroll as scroll, scroller } from 'react-scroll'
import '../App.css';

const Header = () => {

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

  return (
    <>
    {/* Top Navbar (disappears on scroll) */}
      <SocialHeaderSec>
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
        <Row>
            <Col>
              <SocialIconLink href={'//www.facebook.com'} target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
            </Col>
            <Col>
              <SocialIconLink href={'//www.youtube.com'} target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </Col>
            <Col>
              <SocialIconLink href={'//www.google.com'} target="_blank" aria-label="Google">
                <BsGoogle />
              </SocialIconLink>
            </Col>
            </Row>
        </SocialIcons>
      </SocialHeaderSec> 

      {/* Second Navbar */}
      <Navbar expand='md' sticky='top' style={{ background: '#3888C7', fontWeight: 'bold', border: '1px black', borderBottomStyle: 'solid', paddingLeft: '10px'}}>
        
        <Nav.Link href='/'>          
          <Navbar.Brand style={{ color: 'rgba(0, 0, 0, 0.6)' }} className="navbar-brand">
            <img src='images/logo/small-logo.webp' alt="small logo for Worrall Contractors" className="navbar-logo" style={{ marginRight: '5px'}}  />
            Worrall Contractors
          </Navbar.Brand>          
        </Nav.Link>

        {/* Mobile Icons Section - will display on mobile only while the desktop view gets hidden */}
          <MobileSocialIcons className="mobile-socials">
          <Row>
            <Col>
              <SocialIconLink href={'//www.facebook.com'} target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
            </Col>
            <Col>
              <SocialIconLink href={'//www.youtube.com'} target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </Col>
            <Col>
              <SocialIconLink href={'//www.google.com'} target="_blank" aria-label="Google">
                <BsGoogle />
              </SocialIconLink>
            </Col>
            <Col>
              <SocialIconLink href='tel:9714010079'>
                <BsTelephoneFill />
              </SocialIconLink>
            </Col>
            <Col>
              <SocialIconLink href="mailto: nickworrall0910@gmail.com">
                <AiOutlineMail />
              </SocialIconLink>
            </Col>
            </Row>
          </MobileSocialIcons>

        {/* LINKS - Home, Services, etc..  */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/gallery'>Gallery</Nav.Link>
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
    </>
  );
};

export default Header;