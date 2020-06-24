import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import EssexUniversityLogo from "./essex-university-logo.gif";
import HaveringCollegeLogo from "./havering-college-logo.png";
import ReddenCourtLogo from "./redden-court-logo.png";

import "./education.scss";

const schools = [
    {
        img: EssexUniversityLogo,
        title: "University of Essex",
        dateFrom: "2015",
        dateTo: "2018",
        details: [
            { key: "(BSc) Bachelor's Degree in Computer Science", value: "" },
            { key: "Grade", value: "2:1" },
            { key: "Modules", value: "Information Retrieval, Natural Language Engineering, Object-Oriented Programming, Web Development, Data-Structures & Algorithms, Software Engineering and Computer Vision." }
        ]
    },
    {
        img: HaveringCollegeLogo,
        title: "Havering College",
        dateFrom: "2012",
        dateTo: "2014",
        details: [
            { key: "A Level", value: "BTEC Level 3 Extended Diploma - Distinction/Distinction/Merit (A, A, C at A-Level)" }
        ]
    },
    {
        img: ReddenCourtLogo,
        title: "Redden Court School",
        dateFrom: "2007",
        dateTo: "2012",
        details: [
            { key: "GCSE", value: "IT: B, Mathematics: B, English: C, History: B, Science: C, Geography: C" }
        ]
    }
];

const Education = () => {
    return (
        <section className="page-section" id="education">
            <div id="education-scrollspy"></div>
            <div className="pt-4 mx-4">
                <h2 className="page-section-heading text-center mb-5">Education</h2>

                <ListGroup className="list-group-flush mt-5">
                    {schools.map(school => {
                        return (
                            <ListGroupItem key={school.title}>
                                <Row>
                                    <Col md="3"></Col>
                                    <Col>
                                        <h5>{school.title}</h5>
                                    </Col>
                                    <Col md="2" className="text-center">
                                        <h6>{school.dateFrom}-{school.dateTo}</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="3" className="text-center">
                                        <img src={school.img} />
                                    </Col>
                                    <Col>
                                        <p>
                                            {school.details.map(detail => {
                                                return (
                                                    <span key={detail.key}><b>{detail.key}:</b> {detail.value} <br /></span>
                                                );
                                            })}
                                        </p>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        );
                    })}
                </ListGroup>

            </div>
        </section>
    );
};

export default Education;