import React, {useState, useCallback, useEffect} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import "./education.scss";

const Education = () => {
    const [schools, setSchools] = useState([]);

    const schoolsUrl = "https://raw.githubusercontent.com/werzl/CV/master/content/education/schools.json";

    const fetchSchools = useCallback(async (url) => {
        try {
            const response = await fetch(url, {
                method: "GET"
            });

            let responseString = await response.json();

            if (response.ok) {
                setSchools(responseString);
            }
            else {
                console.error(`Error ${response.status}. ${responseString}`);
            }
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
                                        <img src={school.img} alt={school.title}/>
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