import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DownloadPdfButton from "../common/DownloadPdf/DownloadPdfButton";

import "./masthead.scss";

const socialAccounts = [
    { id: "github", url: "https://github.com/Werzl" },
    { id: "linkedin", url: "https://www.linkedin.com/in/ahewit/" },
    { id: "twitter", url: "https://twitter.com/Werzl" },
    { id: "medium", url: "https://werzl.medium.com/" },
];

const Masthead = () => {
    return (
        <header className="masthead text-white">
            <div className="container px-3">
                <Row>
                    <Col md="8">
                        <h1 className="masthead-heading text-uppercase pb-2">
                            Adam Hewitt
                        </h1>

                        <p className="masthead-subheading">
                            <b>Current Role:</b> Cloud Development Team Lead
                            <br />
                            <b>Company:</b> Glasswall Solutions Ltd
                            <br />
                            <b>Since:</b> February 2022
                        </p>

                        <p className="masthead-subheading py-2">
                            .
                            {socialAccounts.map((account) => {
                                return (
                                    <span key={account.id}>
                                        <a
                                            className="social-link"
                                            href={account.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <span className="social-icon">
                                                <svg id={account.id}></svg>
                                            </span>
                                        </a>
                                        .
                                    </span>
                                );
                            })}
                        </p>

                        <DownloadPdfButton />
                    </Col>

                    <Col>
                        <img className="rounded-circle profile-pic mt-4 d-none d-md-block" src="https://media.licdn.com/dms/image/v2/C4D03AQEuoshhDuBxzA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1583505799277?e=1730937600&v=beta&t=GRHQCyuP3MmBXHMkdJE_B9ogflwv0cSvWRBpd2O9uJY" alt="profile picture"/>
                    </Col>
                </Row>
            </div>
        </header>
    );
};

export default Masthead;
