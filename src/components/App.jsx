import React from "react";

import CvNavbar from "./CvNavbar/CvNavbar";
import Masthead from "./Masthead/Masthead";

import Profile from "./Profile/Profile";

import Skills from "./Skills/Skills";

import Education from "./Education/Education";

import Experience from "./Experience/Experience";

import "../bootstrap.css";

const App = () => {
    return (
        <div className="container">
            <CvNavbar />

            <Masthead />

            <Profile />

            <Skills />

            <Education />

            <Experience />
        </div>
    );
};

export default App;