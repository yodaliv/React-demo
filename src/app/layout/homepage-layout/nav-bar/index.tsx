import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './index.scss';
import headerLogo from '../../../../assets/images/svgs/logo.svg';

const NavBar = (props: any) => {
  return (
    <section className='bg-primary'>
      <Container>
        <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
          <Navbar.Brand href='/'>
            <Image className='header-logo' src={ headerLogo } />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#features'>Browse Jobs</Nav.Link>
              <Nav.Link href='#pricing'>How It Works</Nav.Link>
              <NavDropdown title='Log In' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.2'>Log In</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href='#deets'>Sign Up</Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                Find a Designer
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
};

export default NavBar;
