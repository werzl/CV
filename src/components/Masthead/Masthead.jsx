import React from "react";

const Masthead = () => {
    return (
        <header className="masthead text-center bg-primary">
            <div className="container align-items-center">
                <img
                    src="https://avatars0.githubusercontent.com/u/16911902?s=460&u=9a6c95dd36efb2eb35af8638962aa61851f01e62&v=4"
                    className="masthead-avatar mb-5" />

                <h1 className="masthead-heading text-uppercase mb-0">Adam Hewitt</h1>

                <p className="masthead-subheading">
                    a cool subheading
                </p>
            </div>
        </header>
    );
};

export default Masthead;