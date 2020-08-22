import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
import OperatingSystems from "./OperatingSystems";

import "./skills.scss";

const skills = [
    { title: "C#", confidence: 100 },
    { title: "HTML", confidence: 100 },
    { title: "SQL", confidence: 100 },
    { title: "Python", confidence: 90 },
    { title: "JavaScript", confidence: 90 },
    { title: "ES6", confidence: 80 },
    { title: "jQuery", confidence: 80 },
    { title: "Typescript", confidence: 60 },
    { title: "CSS & SASS", confidence: 60 },
];

const tools = [
    { title: "React", confidence: 90 },
    { title: "GitHub Actions", confidence: 90 },
    { title: "Azure DevOps", confidence: 90 },
    { title: "AWS", confidence: 80 },
    { title: "Azure", confidence: 70 },
    { title: "NPM", confidence: 70 },
    { title: "Webpack/Babel", confidence: 70 },
    { title: "Vue.js", confidence: 60 },
    { title: "Jira", confidence: 55 }
];

const Skills = () => {
    return (
        <section className="page-section" id="skills">
            <div id="skills-scrollspy" className="h-50"><p></p></div>
            <div className="mx-4">
                <h2 className="page-section-heading text-center mb-5">Skills</h2>

                <Row>
                    <Col>
                        <OperatingSystems />
                    </Col>
                </Row>

                <Row>
                    <Col md={6} className="mb-4">                    
                        <Table>
                            <thead>
                                <tr>
                                    <th colSpan={3} className="text-center">
                                        <h3>Tools && Frameworks</h3>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {tools.map(tool => {
                                    return (
                                        <tr key={tool.title}>
                                            <th className="pl-4 w-25">{tool.title}</th>
                                            <td><ProgressBar variant="info" animated now={tool.confidence} /></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Col>

                    <Col md={6} className="mb-4">
                        <Table>
                            <thead>
                                <tr>
                                    <th colSpan={3} className="text-center">
                                        <h3>Languages</h3>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {skills.map(skill => {
                                    return (
                                        <tr key={skill.title}>
                                            <th className="pl-4 w-25">{skill.title}</th>
                                            <td><ProgressBar animated now={skill.confidence} /></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Skills;