import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';



const Menubar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">CHAT</Nav.Link>
          <Nav.Link href="/todo">TODO</Nav.Link>
          <Nav.Link href="/album">卒業アルバム</Nav.Link>
          <Nav.Link href="/recommend">おすすめ</Nav.Link>
          <Nav.Link href="/profile">PROFILE</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
};
export default Menubar;