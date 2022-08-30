import styled from "styled-components";

export const FooterSec = styled.div`
  padding: 50px 0px;
  background: #3888C7;
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
  margin-right: 40px;
  display: flex;
  justify-content: right;
`;

export const SocialIconLink = styled.a`
  margin-bottom: 5px;   
  margin-right: 30px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 22px;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease-out;
  }
`;