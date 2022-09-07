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
          <FooterLogo src='images/logo/small-logo.webp' style={{ marginLeft: '20px'}} onClick={scrollTop} />
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
          <SocialIconLink href={'//www.facebook.com'} target="_blank" aria-label="Facebook">
            <FaFacebook style={{ marginRight: '20px' }}/>
          </SocialIconLink>
          <SocialIconLink href={'//www.youtube.com'} target="_blank" aria-label="Youtube">
            <FaYoutube style={{ marginRight: '20px' }}/>
          </SocialIconLink>
          <SocialIconLink href={'//www.google.com'} target="_blank" aria-label="Google">
            <BsGoogle style={{ marginRight: '30px' }}/>
          </SocialIconLink>
        </SocialIcons>          
      </FooterSec>

      {/* Mobile Icons - will display on mobile only while the desktop view gets hidden */}
      <MobileFooterSec>
        <Container>
          <Row>
            <Col xl={true}>
              <FooterLogo src='images/logo/small-logo.webp' />  
            </Col>
            <Col>
              <MobilePhoneNumber href="tel: 9714010079">(971)-401-0079</MobilePhoneNumber><br />
              <MobileEmailAddress href="mailto: nickworrall0910@gmail.com">NickWorrall0910@gmail.com</MobileEmailAddress>
            </Col>
          </Row>
        </Container>

        
        <MobileSocialIcons className="mobile-socials">
          <SocialIconLink href={'//www.facebook.com'} target="_blank" aria-label="Facebook">
            <FaFacebook style={{ marginRight: '10px' }}/>
          </SocialIconLink>
          <SocialIconLink href={'//www.youtube.com'} target="_blank" aria-label="Youtube">
            <FaYoutube style={{ marginRight: '10px' }} />
          </SocialIconLink>
          <SocialIconLink href={'//www.google.com'} target="_blank" aria-label="Google">
            <BsGoogle />
          </SocialIconLink>
        </MobileSocialIcons>
      </MobileFooterSec>
    </>
  )
};

export default Footer;
