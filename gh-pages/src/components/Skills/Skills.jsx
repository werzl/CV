import React, { useState, useCallback, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
import OperatingSystems from "./OperatingSystems";

import { getSectionContent } from "../common/getSectionContent";

import "./skills.scss";

const Skills = () => {
    const [languages, setLanguages] = useState([]);
    const [tools, setTools] = useState([]);

    const languagesUrl = "https://raw.githubusercontent.com/werzl/CV/master/content/skills/languages.json";
    const toolsUrl = "https://raw.githubusercontent.com/werzl/CV/master/content/skills/tools.json";

    const fetchSkillsContent = useCallback(async (languagesUrl, toolsUrl) => {
        try {
            const languages = await getSectionContent(languagesUrl);
            setLanguages(languages);

            const tools = await getSectionContent(toolsUrl);
            setTools(tools);
        }
        catch (e) {
            console.error(e);
        }
    }, [setLanguages, setTools]);   

    useEffect(() => {
        fetchSkillsContent(languagesUrl, toolsUrl);
    }, []);

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
                                {languages.map(language => {
                                    return (
                                        <tr key={language.title}>
                                            <th className="pl-4 w-25">{language.title}</th>
                                            <td><ProgressBar animated now={language.confidence} /></td>
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