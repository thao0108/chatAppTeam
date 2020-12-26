import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import firebase from './config/firebase'
import styles from './Menu.module.css'
import logo from './img/logo.png'

const Menubar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top">
        <Navbar.Brand href="/" className={styles.logo_aria}>
          <img src={logo} className={styles.logo} alt="ロゴ" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><i className="far fa-comment-dots fa-lg mr-2"></i>チャット</Nav.Link>
            <Nav.Link href="/todo"><i className="fas fa-clipboard-list fa-lg mr-2"></i>Todoリスト</Nav.Link>
            <Nav.Link href="/album"><i className="fas fa-book-reader fa-lg mr-2"></i>卒業アルバム</Nav.Link>
            <Nav.Link href="recommend"><i className="fab fa-gratipay fa-lg mr-2"></i>おすすめ</Nav.Link>
            <Nav.Link href="/profile"><i className="far fa-user fa-lg mr-2"></i>プロフィール</Nav.Link>
          </Nav>
          {/* <Form inline>
          <Button variant="dark" onClick={() => firebase.auth().signOut()}><i className="fas fa-sign-out-alt"></i>Logout</Button>
        </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
};
export default Menubar;