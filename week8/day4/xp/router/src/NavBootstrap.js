import Container from 'react-bootstrap/Container';
import NavbarOffcanvas from 'react-bootstrap/esm/NavbarOffcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function NavBootstrap() {
  return (
    <>
     
      
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink variant='light' to='/'>Home</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to="/shop">Shop</NavLink>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default NavBootstrap;