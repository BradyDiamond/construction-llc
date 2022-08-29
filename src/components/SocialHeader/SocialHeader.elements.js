import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SocialHeaderSec = styled.div`
  background: #3888C7;
  border: 1px;
  border-bottom-style: solid;
  transition: top 0.2s ease-in-out;
`

export const SocialHeaderText = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
`

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
  display: flex;
  width: 240px;
  
`;

export const SocialIconLink = styled.a`
  color: rgba(0, 0, 0, 0.55);
  font-size: 24px;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease-out;
  }
`;