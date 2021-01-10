import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, UncontrolledDropdown, DropdownToggle , DropdownItem, DropdownMenu,
  NavLink
} from 'reactstrap';
import './Navbar.css'
import { NavLink as MyNavLink , Link } from 'react-router-dom';

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="my-nav" light expand="md">
    <div className='container'>

    <NavbarBrand tag={ Link } to="/">
      <span>zoma</span>
      <span>style</span>
    </NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
            <NavLink exact tag={ MyNavLink } to="/"> HOME </NavLink>
        </NavItem>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            SERVICES
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem  >
              <NavItem className="no-gutters" >
                  <NavLink tag={ MyNavLink } to="/ServicesLogo"> ALL SERVICES </NavLink>
              </NavItem>
            </DropdownItem>
            <DropdownItem>
              <NavItem>
                  <NavLink tag={ MyNavLink } to="/Construction"> CONSTRUCTION </NavLink>
              </NavItem>
            </DropdownItem>
              <NavItem>
                  <NavLink tag={ MyNavLink } to="/Procurement"> PROCURMENT </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={ MyNavLink } to="/Engineering"> ENGINEERING </NavLink>
              </NavItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            WHO WE ADE
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem  >
              <NavItem className="no-gutters" >
                  <NavLink tag={ MyNavLink } to="/WhoWeAde"> CORE VALUES </NavLink>
              </NavItem>
            </DropdownItem>
            <DropdownItem>
              <NavItem>
                  <NavLink tag={ MyNavLink } to="/WhoWeAde2"> OUR HiSTORY </NavLink>
              </NavItem>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <NavItem>
            <NavLink tag={ MyNavLink } to="/News"> NEWS </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={ MyNavLink } to="/Contact"> CONTACT US </NavLink>
        </NavItem>

      </Nav>
    </Collapse>
    </div>
    </Navbar>
  );
}

export default MyNavbar;  