import React, { useState, useCallback, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

import { getSectionContent } from "../common/getSectionContent";

import "./skills.scss";

const Skills = () => {
    const [techStack, setTechStack] = useState([]);
    const [skills, setSkills] = useState([]);

    const techStackUrl = "content/skills/techStack.json";
    const skillsUrl = "content/skills/skills.json";

    const fetchSkillsContent = useCallback(async (techStackUrl, skillsUrl) => {
        try {
            const techStackContent = await getSectionContent(techStackUrl);
            setTechStack(techStackContent);

            const skillsContent = await getSectionContent(skillsUrl);
            setSkills(skillsContent);
        }
        catch (e) {
            console.error(e);
        }
    }, [setTechStack, setSkills]);   

    useEffect(() => {
        fetchSkillsContent(techStackUrl, skillsUrl);
    }, []);

    return (
        <section className="page-section" id="skills">
            <div id="skills-scrollspy" className="h-50"><p></p></div>
            <div className="mx-4">
                <h2 className="page-section-heading mb-5">Skills</h2>

                <Row>

                    <Col md={6} className="mb-4">
                        <Table>
                            <thead>
                                <tr>
                                    <th colSpan={3}>
                                        <h3>Tech Stack</h3>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {techStack.map(tech => {
                                    return (
                                        <tr key={tech.title}>
                                            <th className="pl-4 w-25">{tech.title}</th>
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
                                    <th colSpan={3}>
                                        <h3>Skills</h3>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {skills.map(skill => {
                                    return (
                                        <tr key={skill.title}>
                                            <th className="pl-4 w-25">{skill.title}</th>
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