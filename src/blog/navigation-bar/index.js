import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

function NavigationBar() {
    return (
        <nav className="navbar navbar-expand-md palette-nav">
            <div className="container-fluid">
                <Navbar.Brand className="palette-brand" href="#home">Book It</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/search">Search</Nav.Link>
                        <Nav.Link href="/create-article">Create Article</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </nav>
    );
}

export default NavigationBar;

