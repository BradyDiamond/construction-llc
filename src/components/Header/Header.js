import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SocialIcons, SocialIconLink, SocialHeaderSec } from './Header.elements';
import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';


class Header extends React.Component { 
  render() {
    return (
      <>
        <SocialHeaderSec>
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
        <Navbar expand='md' sticky='top' style={{ background: '#3888C7'}}>
          <Container>
            <Navbar.Brand href="#home">Contractors LLC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Gallery</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <NavDropdown title="Contact" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Header;