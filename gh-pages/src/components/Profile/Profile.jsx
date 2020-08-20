import React from "react";

const Profile = () => {
    return (
        <section className="page-section">
            <div className="mx-4">
                <h2 className="page-section-heading text-center mb-5">Profile</h2>

                <p className="w-100 text-center">
                    A Bachelor of Computer Science, and full-stack Software Developer.<br />
                    <br />
                    In my current role, I'm leading the push to adopt React (as a means to prototype and experiment with
                    frontend technology other than jQuery).<br />
                    <br />
                    I found myself in charge of small, autonomous squads;
                    while following an Agile Framework similar to the Spotify Model.<br />
                    <br />
                    I see software development as a major interest and have always maintained a balance of work
                    and personal projects. <br />
                    <br />
                    One project I started with a friend recently, <a href="https://github.com/werzl/jdmcserver" target="_blank" rel="noreferrer">jdmcserver</a>,
                    is a Minecraft server hosted in an AWS EC2 instance. As well as a
                    static <a href="https://werzl.github.io/jdmcserver-frontend/#/jdmcserver-frontend/Server" target="_blank" rel="noreferrer">frontend</a> which
                    communicates with an API hosted on AWS API Gateway. The API connects Lambda functions, which toggle the running status of the
                    EC2 instance, and expose the server’s details.
                </p>
            </div>
        </section>
    );
};

export default Profile;