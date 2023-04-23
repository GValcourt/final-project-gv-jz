import React, {useEffect, useState} from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Collapse } from 'react-bootstrap'


function NavigationBar() {
    const { currentUser } = useSelector((state) => state.auth);
    console.log("Current user: (navbar)", currentUser)
    if(!currentUser){
        console.log("No current user (navbar)");
        return(
            <Navbar collapseOnSelect expand="sm" className="palette-nav">
                <div className="container-fluid">
                    <a className="navbar-brand palette-brand" href="#">Book It</a>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav>
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/search">Search</Nav.Link>
                                <Nav.Link href="/create-article">Create Article</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
    else {
        if(currentUser.user_type === 'sysadmin'){
            console.log("Recognized admin");
            return(
                <Navbar collapseOnSelect expand="sm" className="palette-nav">
                    <div className="container-fluid">
                        <a className="navbar-brand palette-brand" href="#">Book It</a>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav>
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                <Nav.Link href="/search">Search</Nav.Link>
                                <Nav.Link href="/create-article">Create Article</Nav.Link>
                                <Nav.Link href="/admin">Admin</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            )
        }
        return (
            <Navbar collapseOnSelect expand="sm" className="palette-nav">
                <div className="container-fluid">
                    <a className="navbar-brand palette-brand" href="#">Book It</a>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href="/search">Search</Nav.Link>
                            <Nav.Link href="/create-article">Create Article</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

export default NavigationBar;

