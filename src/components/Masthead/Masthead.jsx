import React from "react";

import "./masthead.scss";

const socialAccounts = [
    { id: "github", url: "https://github.com/Werzl" },
    { id: "linkedin", url: "https://www.linkedin.com/in/ahewit/" },
    { id: "twitter", url: "https://twitter.com/Werzl" },
    { id: "medium", url: "https://medium.com/@ahewitt_89859" }
];

const Masthead = () => {
    return (
        <header className="masthead text-center bg-primary text-white">
            <div className="container align-items-center">
                <img
                    src="https://avatars0.githubusercontent.com/u/16911902?s=460&u=9a6c95dd36efb2eb35af8638962aa61851f01e62&v=4"
                    className="masthead-avatar mb-5" />

                <h1 className="masthead-heading text-uppercase mb-0">Adam Hewitt</h1>

                <p className="masthead-subheading">
                    Software Engineer && UI/UX Squad Lead
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
            </div>
        </header >
    );
};

export default Masthead;