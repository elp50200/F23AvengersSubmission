import react from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React, { useEffect, useState} from 'react';

 
function App() {
  
    return (
      <>
        <Navbar style={{ backgroundColor: '#4CB848', padding: '1rem 0' }} variant="dark">
          <Container>
            <Row>
              <Col>
                <Link to="/" className="navbar-brand" style={{ color: '#fff' }}>
                  Home
                </Link>
              </Col>
              <Col>
                <Link to="/login" className="navbar-brand" style={{ color: '#fff' }}>
                  Login
                </Link>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <br />
      </>
    );
}
export default App;

