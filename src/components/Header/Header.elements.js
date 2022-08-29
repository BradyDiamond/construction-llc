import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SocialHeaderSec = styled.div`
  background: #3888C7;
  border: 1px;
  border-bottom-style: solid;
`;

export const SocialHeaderText = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const SocialLogo = styled(Link)`
  color: rgba(0, 0, 0, 0.55);
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  text-align: center;

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
  margin-bottom: 2px;   
  margin-right: 30px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 22px;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease-out;
  }
`;