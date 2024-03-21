import React, { useState, useCallback, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getSectionContent } from "../common/getSectionContent";

import "./certifications.scss";

const Certifications = () => {
    const [certifications, setCertifications] = useState([]);

    const certsUrl = "https://raw.githubusercontent.com/werzl/CV/master/content/certifications/certifications.json";

    const fetchCertifications = useCallback(async (url) => {
        try {
            const content = await getSectionContent(url);
            setCertifications(content);
        }
        catch (e) {
            console.error(e);
        }
    }, [setCertifications]);   

    useEffect(() => {
        fetchCertifications(certsUrl);
    }, []);

    return (
        <section className="page-section" id="certifications">
            <div id="certifications-scrollspy"></div>
            <div className="pt-4 mx-4">
                <h2 className="page-section-heading text-center mb-5">Certifications</h2>

                <Row>
                    <Col md="1"></Col>
                    <Col md="11">
                        <Row>
                            {certifications.map(cert => {
                                return (
                                    <Col className="text-center mt-5 pt-3" md="6" xs="12">
                                        <h4 className="certifications-title">{cert.title}</h4>
                                        <p className="certifications-descriptions">{cert.description}</p>
                                        <img src={cert.img} alt={cert.title} className="certifications-image" />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Certifications;