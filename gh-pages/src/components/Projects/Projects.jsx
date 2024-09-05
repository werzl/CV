import React, { useState, useCallback, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import { getSectionContent } from "../common/getSectionContent";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const projectsUrl = "https://raw.githubusercontent.com/werzl/CV/master/content/projects/projects.json";

    const fetchProjects = useCallback(async (url) => {
        try {
            const content = await getSectionContent(url);
            setProjects(content);
        }
        catch (e) {
            console.error(e);
        }
    }, [setProjects]);   

    useEffect(() => {
        fetchProjects(projectsUrl);
    }, []);


    return (
        <section className="page-section" id="projects">
            <div id="projects-scrollspy"></div>
            <div className="pt-4 mx-4">
                <h2 className="page-section-heading mb-5">Projects</h2>

                <ListGroup className="list-group-flush mt-5">
                    {projects.map(project => {
                        return (
                            <ListGroupItem key={project.title} className="pl-0">
                                <Row>
                                    <Col>
                                        <h5>
                                            <a href={project.link}
                                                target="_blank"
                                                rel="noreferrer">{project.title}
                                            </a>
                                        </h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>
                                            {project.description}
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

export default Projects;