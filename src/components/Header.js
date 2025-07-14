import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, Link } from 'react-router-dom';
import LoginModal from './LoginModal';

const Header = () => {
  const location = useLocation();
  const [logoSrc, setLogoSrc] = useState('/images/gongcha_logo_big.png');
  const [showModal, setShowModal] = useState(false); 
  const handleModalOpen = () => setShowModal(true);  
  const handleModalClose = () => setShowModal(false); 

  useEffect(() => {
    const isSubPage = location.pathname !== '/';
    const newLogo = isSubPage
      ? '/images/gongcha-logo-big-bk.png'
      : '/images/gongcha_logo_big.png';

    setLogoSrc(newLogo);
  }, [location.pathname]);

  return (
    <div>
      <Navbar expand="lg" className={`custom-navbar ${location.pathname !== '/' ? 'dark-header' : 'light-header'}`}>
        <Container>
          <div className="mobile-header-box">
            <Navbar.Brand as={Link} to="/" className="logo">
              <img src={logoSrc} alt="공차 로고" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
          </div>
          
          <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
            <div className="nav-left">
              <Nav>
                <Nav.Link as={Link} to="/bend">Brand</Nav.Link>
                <Nav.Link as={Link} to="/new">New</Nav.Link>
                <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
              </Nav>
            </div>

            {/* 가운데 로고 - PC 전용 */}
            <Navbar.Brand as={Link} to="/" className="logo pc-logo">
              <img src={logoSrc} alt="공차 로고" />
            </Navbar.Brand>

            <div className="nav-right">
              <Nav>
                <button className="login-btn" onClick={handleModalOpen}>Login</button>
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal show={showModal} handleClose={handleModalClose} />
    </div>
  );
};

export default Header;
