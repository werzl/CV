import React, { useState, useCallback, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import { HeadingRenderer } from "../common/HeadingRenderer";
import { getSectionContent } from "../common/getSectionContent";

const Profile = () => {
    const [markdownContent, setMarkdownContent] = useState("...");

    const profileContentUrl = "https://raw.githubusercontent.com/werzl/CV/master/content/profile/profile.md";

    const fetchProfileContent = useCallback(async (url) => {
        try {
            const content = await getSectionContent(url, { returnType: "text" });
            setMarkdownContent(content);
        }
        catch (e) {
            console.error(e);
        }
    }, [setMarkdownContent]);

    useEffect(() => {
        fetchProfileContent(profileContentUrl);
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