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
import DownloadPdfButton from "./common/DownloadPdf/DownloadPdfButton";

const App = () => {
    return (
        <>
            <CvNavbar />


            <Masthead />

            <div className="container">
                <DownloadPdfButton />

                <Profile />

                <Skills />

                <Projects />

                <Education />

                <Experience />

                <Achievements />

                <h6 className="ml-5 mb-5">References are available upon request.</h6>
            </div>
        </>
    );
};

export default App;