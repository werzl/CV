import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Achievements = () => {
    return (
        <section className="page-section" id="achievements">
            <div id="achievements-scrollspy"></div>
            <div className="pt-4 mx-4">
                <h2 className="page-section-heading text-center mb-5">Achievements && Interests</h2>

                <Row>
                    <Col md="1"></Col>
                    <Col md="11">
                        <p>
                            Outside of University, my main interests include fitness
                            (last September I completed Tough Mudder for the third time, a team-building 12k mud run)
                            and cooking (this summer, I've had some experience working in a family-owned pub as a chef).
                        </p>

                        <ul>
                            <li>Jack Petchey’s Speak out challenge.</li>
                            <li>Full UK driving license.</li>
                            <li>University of Essex Dean’s list of excellence.</li>
                            <li>PC Gaming.</li>
                            <li>Blogging (see my <a href="https://medium.com/@ahewitt_89859" target="_blank" rel="noreferrer">Medium</a> profile).</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Achievements;