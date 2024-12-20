import React from "react";

import CvNavbar from "./CvNavbar/CvNavbar";

import Masthead from "./Masthead/Masthead";

import Overview from "./Overview/Overview";

import Skills from "./Skills/Skills";

import Projects from "./Projects/Projects";

import Education from "./Education/Education";

import Experience from "./Experience/Experience";

import Achievements from "./Achievements/Achievements";

import Certifications from "./Certifications/Certifications";

import "../bootstrap.css";

const App = () => {
    return (
        <>
            <CvNavbar />

            <Masthead />

            <div className="container">
                <Overview />

                <Skills />

                <Projects />
                
                <Experience />

                <Certifications />

                <Achievements />

                <Education />
            </div>
        </>
    );
};

export default App;