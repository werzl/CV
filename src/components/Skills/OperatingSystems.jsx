import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./operatingSystemIcons.scss";

const operatingSystems = [
    "windows",
    "ubuntu",
    "kalilinux"
];

const OperatingSystems = () => {
    return (
        <div className="mb-5 text-center">
            <h3>Operating Systems</h3>
            <hr />

            <Row className="overflow-hidden">
                {operatingSystems.map(os => {
                    return (
                        <Col key={os}>
                            <div className="os-btn flex-center mb-5">
                                <svg id={os}></svg>
                                <span>{os}</span>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default OperatingSystems;