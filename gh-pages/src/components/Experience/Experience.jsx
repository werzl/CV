import React, { useState, useCallback, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getSectionContent } from "../common/getSectionContent";

import "./experience.scss";

const Experience = () => {
    const [jobs, setJobs] = useState([]);

    const jobsUrl = "content/experience/jobs.json";

    const fetchJobs = useCallback(async (url) => {
        try {
            const content = await getSectionContent(url);
            setJobs(content);
        }
        catch (e) {
            console.error(e);
        }
    }, [setJobs]);

    useEffect(() => {
        fetchJobs(jobsUrl);
    }, []);

    return (
        <section className="page-section" id="experience">
            <div id="experience-scrollspy"></div>
            <div className="pt-4 mx-4">
                <h2 className="page-section-heading mb-5">Experience</h2>

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
                                                    <li key={detail}>{detail}</li>
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