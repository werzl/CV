import React from "react";

import CvNavbar from "./CvNavbar/CvNavbar";

import Masthead from "./Masthead/Masthead";

import Profile from "./Profile/Profile";

import Skills from "./Skills/Skills";

import Projects from "./Projects/Projects";

import Education from "./Education/Education";

import Experience from "./Experience/Experience";

import Achievements from "./Achievements/Achievements";

import "../bootstrap.css";

const App = () => {
    return (
        <>
            <CvNavbar />

            <Masthead />

            <div className="container">
                <Profile />

                <Skills />

                <Projects />

                <Education />

                <Experience />

                <Achievements />
            </div>
        </>
    );
};

export default App;