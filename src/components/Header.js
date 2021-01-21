import React, { useState, useContext } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { NavLink as RRNavLink } from "react-router-dom";
import { FirebaseContext } from "./fbAuth/FirebaseProvider";

/*
when using react-router-dom and react-bootstrap, need to manually add classes
For example <RRNavLink> needs the react-bootstrap classes added for spacing
*/
export const Header = () => {
  const { isLoggedIn, logout } = useContext(FirebaseContext);
  //do i need the following state with router?
  const [expanded, setExpanded] = useState(false);
  // <Nav.Item><Nav.Link onClick={() => setExpanded(false)} href="/">how do i look 1</Nav.Link></Nav.Item>
  // <Nav.Item><Nav.Link href="/">how do i look</Nav.Link></Nav.Item>
  // <Nav.Item><Nav.Link href="/">how do i look</Nav.Link></Nav.Item>

  return (
    <>
      <Navbar bg="light" expand="lg" className="xheader-nav">
        <Navbar.Brand href="/">All I Want For Christmas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto navbar-nav">
            {isLoggedIn &&
              <>

                <Nav.Item ><RRNavLink className="nav-link" to="/">Home</RRNavLink></Nav.Item>
                <Nav.Item><RRNavLink className="nav-link justify-content-start" to="/list">Show All</RRNavLink></Nav.Item>
              </>
            }
            <Button onClick={logout} variant="outline-dark" size="sm">Logout</Button>
          </Nav>


        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
