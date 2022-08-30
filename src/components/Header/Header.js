import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SocialIcons, SocialIconLink, SocialHeaderSec, LinkSec, EmailAddress, PhoneNumber, MobileSocialIcons } from './Header.elements';
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
          <Container>
          <Navbar.Brand style={{ marginLeft: '10px', marginRight: '20px', color: 'rgba(0, 0, 0, 0.7)' }} className='mobile-brand-style' href="/">Contractors LLC</Navbar.Brand>
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