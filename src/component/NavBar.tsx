import React from 'react';
import Radium from 'radium';
import { BsPerson } from 'react-icons/bs';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


interface NavBarProps {
    isLogged: boolean;
}

const NavBar = (props: NavBarProps) => {
    return (
        <Navbar className='di-bg-primary' expand='md' variant='dark'>
            <Navbar.Brand href='#homepage'>Della Infotech</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='w-100' justify={true}>
                    <Nav.Link className='mx-5 nav-item text-nowrap' href='#home'>Home</Nav.Link>
                    <Nav.Link className='mx-5 nav-item text-nowrap' href='#pricing'>Pricing</Nav.Link>
                    <Nav.Link className='mx-5 nav-item text-nowrap' href='#aboutUs'>About Us</Nav.Link>
                    {getLoginContent(props.isLogged)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

const getLoginContent = (isLogged: boolean) => {
    if (isLogged) {
        return (
            <NavDropdown className='ml-5 mr-2' title={<BsPerson size={20} />} id='basic-nav-dropdown'>
                <NavDropdown.Item href='#profile'>My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='logout'>Logout</NavDropdown.Item>
            </NavDropdown>
        );
    } else {
        return (
            <Nav.Link className='ml-5 mr-2' href='#login'>
                Login now
            </Nav.Link>
        );
    }
}

export default Radium(NavBar);
