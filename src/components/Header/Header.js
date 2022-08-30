import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SocialIcons, SocialIconLink, SocialHeaderSec, LinkSec, EmailAddress, PhoneNumber,
  MobileEmailAddress, MobilePhoneNumber, MobileLinkSec, MobileSocialIcons } from './Header.elements';
import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';
import { BsGoogle, BsTelephoneFill } from 'react-icons/bs';
import './HeaderStyles.css';


class Header extends React.Component { 
  render() {
    return (
      <>
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
          <Row>
            <Col lg={true}>
              <Navbar.Brand style={{ marginLeft: '30px', marginRight: '10px'}} className='mobile-brand-style' href="/">Contractors LLC</Navbar.Brand>
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
                <SocialIconLink>
                  <BsTelephoneFill />
                </SocialIconLink>
                <SocialIconLink>
                  <AiOutlineMail />
                </SocialIconLink>
              </MobileSocialIcons>
            </Col>
          </Row>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Header;