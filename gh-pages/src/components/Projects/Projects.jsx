// import React, {useState, useCallback, useEffect} from "react";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import projectData from "./projects.json";

import "./projects.scss";

const Projects = () => {
    const projects = projectData;
    // const [projects, setProjects] = useState([]);

    // const projectsUrl = ";"

    // const fetchProjects = useCallback(async (url) => {
    //     try {
    //         const response = await fetch(url, {
    //             method: "GET"
    //         });

    //         let responseString = await response.json();

    //         if (response.ok) {
    //             setProjects(responseString);
    //         }
    //         else {
    //             console.error(`Error ${response.status}. ${responseString}`);
    //         }
    //     }
    //     catch (e) {
    //         console.error(e);
    //     }
    // }, [setProjects]);

    // useEffect(() => {
    //     fetchProjects(projectsUrl);
    // }, []);


    return (
        <section className="page-section" id="education">
            <div id="education-scrollspy"></div>
            <div className="pt-4 mx-4">
                <h2 className="page-section-heading text-center mb-5">Projects</h2>

                <ListGroup className="list-group-flush mt-5">
                    {projects.map(project => {
                        return (
                            <ListGroupItem key={project.title}>
                                <Row>
                                    <Col>
                                        <h5><a href={project.link} target="_blank" rel="noreferrer">{project.title}</a></h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>
                                            {project.details.map(detail => {
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

export default Projects;