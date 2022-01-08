import React from 'react';
import { Row, Container, Col, Image } from 'react-bootstrap';

import './index.scss';
import Icons from '../../../ui-kit/icons';
import logo from '../../../../assets/images/svgs/logo-icon.svg';

const Footer = () => {
  return (
    <section className='bg-primary text-white-50 pb-20 pt-50 text-center text-lg-left'>
      <Container>
        <Row>
          <Col lg={ 4 }>
            <Image src={ logo } height='50' />

            <p>Need help?</p>
            <p>Call 123 456 789</p>
          </Col>
          <Col lg={ 8 }>
            <Row>
              <Col lg={ 3 }>
                <div className='footer'>

                </div>
                <h5 className='mb-20'>Services</h5>
                <p className='font-12'>Archincer</p>
                <p className='font-12'>Custom design</p>
                <p className='font-12'>Contact us</p>
              </Col>
              <Col lg={ 3 }>
                <h5 className='mb-20'>Company</h5>
                <p className='font-12'>About Us</p>
                <p className='font-12'>Work Flow</p>
                <p className='font-12'>Account</p>
              </Col>
              <Col lg={ 3 }>
                <h5 className='mb-20'>Resources</h5>
                <p className='font-12'>Find a Designer</p>
                <p className='font-12'>Sign Up</p>
                <p className='font-12'>Log In</p>
              </Col>
              <Col lg={ 3 }>
                <h5 className='mb-20'>Follow Us</h5>
                <Icons className='mx-5' type='facebook'/>
                <Icons className='mx-5'  type='linked' />
                <Icons className='mx-5'  type='twitter' />
              </Col>
            </Row>
          </Col>
        </Row>
        <p className='font-12 text-center text-lg-left mt-30'>© 2021 Archincer. All rights reserved.</p>
      </Container>
    </section>
  );
}

export default Footer;
