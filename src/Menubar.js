import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import firebase from './config/firebase';


const Menubar = () => {
    return(
      <>
        <Navbar bg="dark" variant="dark"> 
        <Nav className="mr-auto">
          <Nav.Link href="/">ROOM</Nav.Link>
          <Nav.Link href="/todo">TODO</Nav.Link>
          <Nav.Link href="/album">卒業アルバム</Nav.Link>
          <Nav.Link href="/recommend">おすすめ</Nav.Link>
          <Nav.Link href="/profile">PROFILE</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="dark" onClick={() => firebase.auth().signOut()}>Logout</Button>
        </Form>
      </Navbar>
    </>
     )
};
export default Menubar;