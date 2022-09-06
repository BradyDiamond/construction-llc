import styled from 'styled-components';

export const ServicesSec = styled.div`
  padding-bottom: 100px;
  background: white;
`;

export const ContactSection = styled.div`
  padding: 200px 0px;
  background: #60A0D2;
  text-align: center;
`;

export const ContactHeader = styled.h2`
  text-decoration: underline;
  color: rgba(0, 0, 0, 0.7)

  
`;

export const ContactEmail = styled.h2`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
`;

export const ContactPhoneNumber = styled.h2`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
`;

export const ServicesListSec = styled.div`
  padding: 50px 0px;
  background: white;
`;

export const ListTitle = styled.h1`
  text-align: center;
  text-decoration: underline;
`;

export const ServicesList = styled.ul`
  text-decoration: none;
`;

export const Services = styled.li`
  text-align: center;
`;

export const ServicesTagline = styled.h5`
  z-index: -1;
  text-align: right;
  height:-25vh;
  @media screen and (max-width: 720px) {
    display: none;
  }
  .CardFlip{
    z-index: 2;
    position: absolute;
  }
`;