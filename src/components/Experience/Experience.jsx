import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./experience.scss";

const jobs = [
    {
        key: "glasswall-solutions",
        company: "Glasswall Solutions",
        title: "UI / UX Squad Lead",
        dateFrom: "July 2019",
        dateTo: "Present",
        details: [
            "Joined as a Junior Developer, directly contributing to the ‘Glasswall Rebuild for Email’ SaaS solution in an agile development team.",
            "Quickly established and took charge of frontend development on the user portal for the SaaS solution.",
            "Contributed to the push to serverless functions over kubernetes microservices.",
            "Lead the push to adopt React as Glasswall’s frontend library of choice.",
            "Became in charge of UI/UX development on new products, writing numerous guides and blog posts to set coding standards examples for React and JavaScript."
        ]
    },
    {
        key: "paramet",
        company: "Paramet",
        title: "Junior Developer",
        dateFrom: "Aug 2018",
        dateTo: "July 2019",
        details: [
            "Created MVC websites using the Microsoft .Net framework.",
            "Built responsive web pages using the Bootstrap 4 framework.",
            "Built apps using jQuery and Vue.js.",
            "Worked on a fluid-dynamic selection engine written in C#."
        ]
    },
    {
        key: "bt",
        company: "BT",
        title: "Summer Project",
        dateFrom: "Jun 2018",
        dateTo: "Aug 2018",
        details: [
            "Developed website prototype for revamping customer enquiry forms. ",
            "Developed a script using the natural language toolkit to analyse and consolidate forms from before the update.",
            "Worked with BT using sensitive data (protected under NDA).",
            "Provided analysis and translation of colloquial engineering vocabulary to improve customer experience."
        ]
    },
    {
        key: "university-of-essex",
        company: "University of Essex",
        title: "Final Year Project",
        dateFrom: "Oct 2015",
        dateTo: "Aug 2018",
        details: [
            "My final year project is a web app, acting as a student dashboard and study planner.The plan was to solve a problem observed from my own experience of being a student (unable to track my grade and progress without an excel spreadsheet).",
            "Web Scraping tool to retrieve information on assignments.",
            "Client-side scripts written in JavaScript and PHP.",
            "MySQL and Java for the backend.",
            "The SQL database is stored and accessed through an Amazon AWS endpoint, using their relational database service."
        ]
    }
];

const Experience = () => {
    return (
        <section className="page-section" id="experience">
            <div id="experience-scrollspy"></div>
            <div className="pt-4 mx-4">
                <h2 className="page-section-heading text-center mb-5">Experience</h2>

                <ul className="timeline">
                    {jobs.map(job => {
                        return (
                            <li key={job.key}>
                                <Row>
                                    <Col md="9">
                                        <h5>{job.company}</h5>
                                    </Col>
                                    <Col>
                                        <p><b>{job.dateFrom} - {job.dateTo}</b></p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="10">
                                        <h6>{job.title}</h6>

                                        <ul>
                                            {job.details.map(detail => {
                                                return (
                                                    <li key={job.key}>{detail}</li>
                                                );
                                            })}
                                        </ul>
                                    </Col>
                                </Row>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Experience;