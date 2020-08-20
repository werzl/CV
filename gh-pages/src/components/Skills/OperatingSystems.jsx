import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OperatingSystems = () => {
    return (
        <div className="mb-5 text-center">
            <h3>Operating Systems</h3>
            <hr />

            <Row className="overflow-hidden">
                <Col>
                    <div className="mb-5">
                        <svg className="os-icon" id="windows"></svg>
                        <span>Windows</span>
                    </div>
                </Col>
                <Col>
                    <div className="mb-5">
                        <svg className="os-icon" id="ubuntu"></svg>
                        <span>Ubuntu</span>
                    </div>
                </Col>
                <Col>
                    <div className="mb-5">
                        <svg className="os-icon" id="kalilinux"></svg>
                        <span>Kali Linux</span>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default OperatingSystems;