import React from 'react';
import { FooterSec, MobileBrandName, MobileFooterSec, SocialIcons, SocialIconLink, LinkSec, EmailAddress, PhoneNumber, MobileSocialIcons, MobilePhoneNumber, MobileEmailAddress  } from './Footer.elements';
import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';
import { BsGoogle, BsTelephoneFill } from 'react-icons/bs';
import './FooterStyles.css';

const Footer = () => {
  return (
    <>
      <FooterSec>   
        <LinkSec>
          <PhoneNumber href="tel:360867-5309">
            <BsTelephoneFill style={{ marginRight: '5px'}} />
            CALL NOW (360)867-5309</PhoneNumber>
          <EmailAddress href="mailto: example@example.com">
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
      </FooterSec>

      {/* Mobile Icons - will display on mobile only while the desktop view gets hidden */}
      <MobileFooterSec>
        <MobilePhoneNumber href="tel:360867-5309">(360) 867-5309</MobilePhoneNumber><br />
        <MobileEmailAddress href="mailto: example@example.com">example@example.com</MobileEmailAddress>
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
        </MobileSocialIcons>
      </MobileFooterSec>
    </>
  )
};

export default Footer;
