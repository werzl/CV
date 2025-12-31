import React from "react";

import CvNavbar from "./CvNavbar/CvNavbar";
import Masthead from "./Masthead/Masthead";
import Overview from "./Overview/Overview";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
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
                
                <Experience />

                <Education />
                
                <Projects />
                
                <Certifications />

                <Achievements />
            </div>
        </>
    );
};

export default App;