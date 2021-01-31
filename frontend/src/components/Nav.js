import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import logo from '../data/logo.png';
import AuthOptions from './auth/AuthOptions';


const Navit = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Navbar color="faded" textColor = "white" light expand="md">
        <NavbarBrand href="/" ><img src={logo} width="64" height="40"/>   <span style={{'color':'rgb(128, 223, 255)'}}>Carmour</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Shop Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/UserHistory">History</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Vehicles">My Vehicles</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Learn More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/AboutUs">
                  About Us
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/Team">
                  Our Team
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <AuthOptions />
          {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Profile
      </Button> */}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLink href="/ShowProfiles">View Profiles</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink href="/CreateProfile">Create Profile</NavLink></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navit;