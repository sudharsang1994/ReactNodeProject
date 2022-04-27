import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap";
import MenuItems from "./MenuItems";
import menuItems from "../../static/json/submenuitems.json";
import '../organism/header/Header.css';
function SubMneu() {
  return (
    <Navbar expand="md" className="m-megamenu">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="menus m-megamenu">
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                );
              })}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default SubMneu;
