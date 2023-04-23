import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { useSelector } from "react-redux";

function NavigationBar() {
    // const { currentUser } = useSelector((state) => state.user);
    // if(!currentUser){
        return(
            <Navbar collapseOnSelect expand="lg" className='palette-nav'>
                <div className="container-fluid">
                    <Navbar.Brand className="palette-brand" href="#home">Book It</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar-nav">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/search">Search</Nav.Link>
                            <Nav.Link href="/create-article">Create Article</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    // }
    // else {
    //     if(currentUser.type == 'sysadmin'){
    //         return(
    //             <nav className="navbar navbar-expand-md palette-nav">
    //                 <div className="container-fluid">
    //                     <Navbar.Brand className="palette-brand" href="#home">Book It</Navbar.Brand>
    //                     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    //                     <Navbar.Collapse id="basic-navbar-nav">
    //                         <Nav className="navbar-nav">
    //                             <Nav.Link href="/home">Home</Nav.Link>
    //                             <Nav.Link href="/profile">Profile</Nav.Link>
    //                             <Nav.Link href="/search">Search</Nav.Link>
    //                             <Nav.Link href="/create-article">Create Article</Nav.Link>
    //                             <Nav.Link href="/admin">Admin</Nav.Link>
    //                         </Nav>
    //                     </Navbar.Collapse>
    //                 </div>
    //             </nav>
    //         )
    //     }
    //     return (
    //         <nav className="navbar navbar-expand-md palette-nav">
    //             <div className="container-fluid">
    //                 <Navbar.Brand className="palette-brand" href="#home">Book It</Navbar.Brand>
    //                 <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    //                 <Navbar.Collapse id="basic-navbar-nav">
    //                     <Nav className="navbar-nav">
    //                         <Nav.Link href="/home">Home</Nav.Link>
    //                         <Nav.Link href="/profile">Profile</Nav.Link>
    //                         <Nav.Link href="/search">Search</Nav.Link>
    //                         <Nav.Link href="/create-article">Create Article</Nav.Link>
    //                     </Nav>
    //                 </Navbar.Collapse>
    //             </div>
    //         </nav>
    //     );
    // }
}

export default NavigationBar;

