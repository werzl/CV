import React, { useState, useEffect } from "react";
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())) {
            setIsMobile(true);
        }
    }, []);

    return (
        <header className="masthead text-white">
            <div className="container px-3">
                <Row className="w-100">
                    <Col md="8">
                        <h1 className="masthead-heading text-uppercase pb-2">
                            Adam Hewitt
                        </h1>

                        <p className="masthead-subheading">
                            <b>Role:</b> Dev and Delivery Manager
                            <br />
                            <b>Company:</b> Glasswall
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

                        { !isMobile && <DownloadPdfButton /> }
                    </Col>

                    <Col>
                        <img className="rounded-circle profile-pic mt-4 d-none d-md-block" src="https://avatars.githubusercontent.com/u/16911902?v=4" alt="profile picture"/>
                    </Col>
                </Row>
            </div>
        </header>
    );
};

export default Masthead;
