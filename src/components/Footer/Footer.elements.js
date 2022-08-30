import styled from "styled-components";

export const FooterSec = styled.div`
  padding: 20px 0px;
  background: #3888C7;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const LinkSec = styled.div`
  align-items: left;
  position: absolute;

  @media screen and (max-width: 720px) {
    position: right;
    align-items: right;
  }
`;

export const EmailAddress = styled.a`
  margin-left: 40px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease-out;
  }

`;

export const PhoneNumber = styled.a`
  margin-left: 40px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease-out;
  }
`;

export const SocialIcons = styled.div`
  margin-right: 60px;
  display: flex;
  justify-content: right;
`;

export const SocialIconLink = styled.a`
  margin-right: 20px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 22px;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease-out;
  }
`;
// Mobile Styling

export const MobileFooterSec = styled.div`
  padding: 30px 0px;
  background: #3888C7;
  text-align: center;

  @media screen and (min-width: 721px) {
    display: none;
  }
`;

export const MobileEmailAddress = styled.a`
  color: rgba(0, 0, 0, 0.55);
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 720px) {
    font-size: 14px
  }
`;

export const MobilePhoneNumber = styled.a`
  color: rgba(0, 0, 0, 0.55);
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 720px) {
    font-size: 14px
  }
`;

export const MobileLinkSec = styled.div`
    text-align: right;
`;

export const MobileSocialIcons = styled.div`

  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    
  }

  @media screen and (min-width: 721px) {
    display: none;

 }
`;

export const MobileBrandName = styled.h5`
  text-align: center;
`;