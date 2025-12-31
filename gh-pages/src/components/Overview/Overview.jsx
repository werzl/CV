import React, { useState, useCallback, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import { HeadingRenderer } from "../common/HeadingRenderer";
import { getSectionContent } from "../common/getSectionContent";

import "./Overview.scss";

const Overview = () => {
    const [markdownContent, setMarkdownContent] = useState("...");

    const profileContentUrl = "content/profile/profile.md";

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
                <h2 className="page-section-heading mb-5">Overview</h2>

                <div className="profileText">
                    <ReactMarkdown source={markdownContent} renderers={{ heading: HeadingRenderer }} />
                </div>
            </div>
        </section>
    );
};

export default Overview;