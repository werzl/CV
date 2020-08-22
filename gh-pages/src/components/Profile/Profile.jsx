import React, { useState, useCallback, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import { HeadingRenderer } from "../common/HeadingRenderer";

const Profile = () => {
    const [markdownContent, setMarkdownContent] = useState("...");

    const profileContentUrl = "https://raw.githubusercontent.com/werzl/CV/master/content/profile/profile.md";

    const fetchMdContent = useCallback(async (url) => {
        try {
            const response = await fetch(url,{
                method: "GET"                
            });

            let responseString = await response.text();

            if (response.ok) {
                setMarkdownContent(responseString);
            }
            else {
                console.error(`Error ${response.status}. ${responseString}`);
            }
        }
        catch (e) {
            console.error(e);
        }
    }, [setMarkdownContent]);

    useEffect(() => {
        fetchMdContent(profileContentUrl);
    }, []);

    return (
        <section className="page-section">
            <div className="mx-4">
                <h2 className="page-section-heading text-center mb-5">Profile</h2>

                <div className="w-100 text-center">
                    <ReactMarkdown source={markdownContent} renderers={{ heading: HeadingRenderer }} />
                </div>
            </div>
        </section>
    );
};

export default Profile;