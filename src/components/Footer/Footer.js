import React from 'react';
import { FooterSec, SocialIcons, SocialIconLink, LinkSec, EmailAddress, PhoneNumber  } from './Footer.elements';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';
import { BsGoogle, BsTelephoneFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <FooterSec>
        <Container>
          <Row>
          <LinkSec>
            <PhoneNumber href="tel:360867-5309">
              <BsTelephoneFill style={{ marginRight: '5px'}} />
              CALL NOW (360)867-5309</PhoneNumber>
            <EmailAddress href = "mailto: example@example.com">
              <AiOutlineMail style={{ marginRight: '5px', fontSize: '18px'}} />
              EMAIL: example@example.com
              </EmailAddress>
          </LinkSec>
        </Row>
        <Row>
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
          </Row>
        </Container>
      </FooterSec>
    </>
  )
};

export default Footer;
