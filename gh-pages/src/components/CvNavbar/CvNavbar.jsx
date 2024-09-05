import React from "react";
import Scrollspy from "react-scrollspy";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const CvNavbar = () => {
    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="secondary" variant="dark" id="mainNav" className="text-uppercase d-md-none">
            <div className="container">
                <Navbar.Brand href="#">AH</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="navbarResponsive">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Scrollspy items={["experience-scrollspy"]} currentClassName="scrolled" className="p-0 m-0" offset={100}>
                                <Nav.Link href="#experience">Experience</Nav.Link>
                            </Scrollspy>
                        </Nav.Item>
                        <Nav.Item>
                            <Scrollspy items={["projects-scrollspy"]} currentClassName="scrolled" className="p-0 m-0" offset={100}>
                                <Nav.Link href="#projects">Projects</Nav.Link>
                            </Scrollspy>
                        </Nav.Item>
                        <Nav.Item>
                            <Scrollspy items={["certifications-scrollspy"]} currentClassName="scrolled" className="p-0 m-0" offset={100}>
                                <Nav.Link href="#certifications">Certifications</Nav.Link>
                            </Scrollspy>
                        </Nav.Item>
                        <Nav.Item>
                            <Scrollspy items={["achievements-scrollspy"]} currentClassName="scrolled" className="p-0 m-0" offset={100}>
                                <Nav.Link href="#achievements">Achievements</Nav.Link>
                            </Scrollspy>
                        </Nav.Item>
                        <Nav.Item>
                            <Scrollspy items={["skills-scrollspy"]} currentClassName="scrolled" className="p-0 m-0" offset={100}>
                                <Nav.Link href="#skills">Skills</Nav.Link>
                            </Scrollspy>
                        </Nav.Item>
                        <Nav.Item>
                            <Scrollspy items={["education-scrollspy"]} currentClassName="scrolled" className="p-0 m-0" offset={100}>
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