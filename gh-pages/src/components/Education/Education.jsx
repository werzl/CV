import React, {useState, useCallback, useEffect} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import { getSectionContent } from "../common/getSectionContent";

import "./education.scss";

const Education = () => {
    const [schools, setSchools] = useState([]);

    const schoolsUrl = "content/education/schools.json";

    const fetchSchools = useCallback(async (url) => {
        try {
            const content = await getSectionContent(url);
            setSchools(content);
        }
        catch (e) {
            console.error(e);
        }
    }, [setSchools]);   

    useEffect(() => {
        fetchSchools(schoolsUrl);
    }, []);    

    return (
        <section className="page-section" id="education">
            <div id="education-scrollspy"></div>
            <div className="pt-4 mx-4">
                <h2 className="page-section-heading mb-5">Education</h2>

                <ListGroup className="list-group-flush mt-5">
                    {schools.map(school => {
                        return (
                            <ListGroupItem key={school.title} className="pl-0 pb-3">
                                <Row className="pb-3">
                                    <Col md="4">
                                        <img src={school.img} alt={school.title}/>
                                    </Col>

                                    <Col>
                                        <h5>{school.title}</h5>
                                    </Col>

                                    <Col md="2">
                                        <h6>{school.dateFrom}-{school.dateTo}</h6>
                                    </Col>
                                </Row>

                                <Row>
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