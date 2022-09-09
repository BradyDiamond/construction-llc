import React from 'react';
import { FooterSec, MobileFooterSec, SocialIcons, SocialIconLink, LinkSec, EmailAddress, PhoneNumber, MobileSocialIcons, MobilePhoneNumber, MobileEmailAddress, FooterLogo  } from './Footer.elements';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';
import { BsGoogle, BsTelephoneFill } from 'react-icons/bs';
import './FooterStyles.css';

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
      <FooterSec>   
        <LinkSec>
          <a href="/">
            <FooterLogo src='images/logo/small-logo.webp' style={{ marginLeft: '20px'}} className='footer-logo' />
          </a>
          <PhoneNumber href="tel: 9014010079">
            <BsTelephoneFill style={{ marginRight: '5px'}} />
            CALL NOW (971)-401-0079
          </PhoneNumber>
          <EmailAddress href="mailto: nickworrall0910@gmail.com">
            <AiOutlineMail style={{ marginRight: '5px', fontSize: '18px'}} />
            EMAIL: NICKWORRALL0910@GMAIL.COM
          </EmailAddress>
        </LinkSec>

        <SocialIcons>
          <SocialIconLink href={'https://www.facebook.com/profile.php?id=100076005857293'} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook style={{ marginRight: '20px' }}/>
          </SocialIconLink>
          <SocialIconLink href={'https://www.google.com/maps/place/Worrall+Contractors+LLC/@45.3230465,-122.5982202,15z/data=!4m5!3m4!1s0x0:0x5c1581eeb5158534!8m2!3d45.3230465!4d-122.5982202'} target="_blank" rel="noopener noreferrer" aria-label="Google">
            <BsGoogle style={{ marginRight: '30px' }}/>
          </SocialIconLink>
        </SocialIcons>          
      </FooterSec>

      {/* Mobile Icons - will display on mobile only while the desktop view gets hidden */}
      <MobileFooterSec>
        <Container>
          <Row>
            <Col xl={true}>
              <a href='/'>
                <FooterLogo src='images/logo/small-logo.webp' /> 
              </a> 
            </Col>
            <Col xl={true}>
              <MobilePhoneNumber href="tel: 9714010079">(971)-401-0079</MobilePhoneNumber><br />
            </Col>
            <Col xl={true}>
              <MobileEmailAddress href="mailto: nickworrall0910@gmail.com">NickWorrall0910@gmail.com</MobileEmailAddress>
            </Col>
          </Row>
        </Container>

        
        <MobileSocialIcons className="mobile-socials">
          <SocialIconLink href={'https://www.facebook.com/profile.php?id=100076005857293'} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook style={{ marginRight: '10px' }}/>
          </SocialIconLink>
          <SocialIconLink href={'https://www.google.com/maps/place/Worrall+Contractors+LLC/@45.3230465,-122.5982202,15z/data=!4m5!3m4!1s0x0:0x5c1581eeb5158534!8m2!3d45.3230465!4d-122.5982202'} target="_blank" rel="noopener noreferrer" aria-label="Google">
            <BsGoogle />
          </SocialIconLink>
        </MobileSocialIcons>
      </MobileFooterSec>
    </>
  )
};

export default Footer;
