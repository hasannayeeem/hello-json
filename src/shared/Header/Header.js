import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../Assets/images/logo.png";
import "./Header.css";
import { useContext } from "react";
import { BgContext, DarkModeContext } from "../../App";

const Header = () => {
  const [bg, setBg] = useContext(BgContext);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="white"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt=""></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto fw-bolder navbar">
              <div className="nav-item">
                <Nav.Link className="nav--link" as={Link} to='home'>
                  HOME
                </Nav.Link>
              </div>
              <div className="nav-item">
                <Nav.Link className="nav--link" as={Link} to="hero">
                  HERO
                </Nav.Link>
              </div>
              <div className="nav-item">
                <Nav.Link className="nav--link" as={Link} to="test">
                  TEST
                </Nav.Link>
              </div>
              <div className="nav-item">
              <NavDropdown title="settings" className='nav--link' id="navbarScrollingDropdown">
              <NavDropdown title="background" className='nav--link' id="navbarScrollingDropdown">
                <NavDropdown.Item>
                <span onClick={()=>setBg('d')}> <small>default</small> </span>
              </NavDropdown.Item>
                <NavDropdown.Item>
                <span onClick={()=>setBg('blue')}>blue</span>
              </NavDropdown.Item>
                <NavDropdown.Item>
                <span onClick={()=>setBg('red')}>red</span>
              </NavDropdown.Item>
                <NavDropdown.Item>
                <span onClick={()=>setBg('yellow')}>yellow</span>
              </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown title="button" id="navbarScrollingDropdown">
              <NavDropdown title="btn-bg" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                blue
              </NavDropdown.Item>
                <NavDropdown.Item>
                red
              </NavDropdown.Item>
                <NavDropdown.Item>
                yellow
              </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="btn-text" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                blue
              </NavDropdown.Item>
                <NavDropdown.Item>
                red
              </NavDropdown.Item>
                <NavDropdown.Item>
                yellow
              </NavDropdown.Item>
              </NavDropdown>
              </NavDropdown>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
              </div>
              <div className="nav-item">
                <Nav.Link className="nav--link" as={Link} to="contact">
                  CONTACT
                </Nav.Link>
              </div>
              <div className="nav-item">
                <Nav.Link className="nav--link" as={Link} to="about">
                  ABOUT ME
                </Nav.Link>
              </div>
              <div className="nav-item">
                <Nav.Link className="nav--link" as={Link} to="login">
                  LOG IN
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
