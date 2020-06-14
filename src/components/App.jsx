import React from "react";

import CvNavbar from "./CvNavbar/CVNavbar";

import "../bootstrap.css";

const App = () => {
    return (
        <div className="container">
            <CvNavbar />

            <header className="masthead text-center bg-primary">
                <div className="container align-items-center">
                    <img src="https://avatars0.githubusercontent.com/u/16911902?s=460&u=9a6c95dd36efb2eb35af8638962aa61851f01e62&v=4" className="masthead-avatar mb-5" />
                </div>
            </header>
        </div>
    );
};

export default App;