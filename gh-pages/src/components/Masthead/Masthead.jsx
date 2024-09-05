import React from "react";

import DownloadPdfButton from "../common/DownloadPdf/DownloadPdfButton";

import "./masthead.scss";

const socialAccounts = [
    { id: "github", url: "https://github.com/Werzl" },
    { id: "linkedin", url: "https://www.linkedin.com/in/ahewit/" },
    { id: "twitter", url: "https://twitter.com/Werzl" },
    { id: "medium", url: "https://werzl.medium.com/" }
];

const Masthead = () => {
    return (
        <header className="masthead text-center text-white">
            <div className="container align-items-center">
                <h1 className="masthead-heading text-uppercase mb-0">Adam Hewitt</h1>

                <p className="masthead-subheading">
                    Cloud Development Team Lead at Glasswall Solutions Ltd 
                    <br/>
                    Since Feb 2022
                </p>

                <p className="masthead-subheading">
                    .
                    {socialAccounts.map((account) => {
                        return (
                            <span key={account.id}>
                                <a className="social-link" href={account.url} target="_blank" rel="noreferrer">
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
            </div>
        </header >
    );
};

export default Masthead;