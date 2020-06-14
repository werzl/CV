import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const CvNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" id="mainNav">
            <div className="container">
                <Navbar.Brand href="#">Adam Hewitt</Navbar.Brand>

                <Navbar.Collapse id="navbarResponsive">
                    <Nav className="ml-auto">
                        <Nav.Link href="">Skills</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default CvNavbar;