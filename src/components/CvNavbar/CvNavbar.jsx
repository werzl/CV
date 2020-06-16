import React from "react";
import Scrollspy from "react-scrollspy";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const CvNavbar = () => {
    return (
        <Navbar defaultExpanded fixed="top" expand="lg" bg="secondary" variant="dark" id="mainNav" className="text-uppercase">
            <div className="container">
                <Navbar.Brand href="#">Adam Hewitt | CV</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="navbarResponsive">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Scrollspy items={["skills"]} currentClassName="scrolled" className="p-0 m-0" offset="10">
                                <Nav.Link href="#skills">Skills</Nav.Link>
                            </Scrollspy>
                        </Nav.Item>
                        <Nav.Item>
                            <Scrollspy items={["education"]} currentClassName="scrolled" className="p-0 m-0" >
                                <Nav.Link href="#education">Education</Nav.Link>
                            </Scrollspy>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default CvNavbar;