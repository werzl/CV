import React, { useState, useCallback, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMarkdown from "react-markdown";

import { HeadingRenderer } from "../common/HeadingRenderer";
import { MarkdownLinkRenderer } from "../common/MarkdownLinkRenderer";
import { getSectionContent } from "../common/getSectionContent";

const Achievements = () => {
    const [markdownContent, setMarkdownContent] = useState("...");

    const achievementsContentUrl = "content/achievements-and-interests/achievements-and-interests.md";

    const fetchAchievementsContent = useCallback(async (url) => {
        try {
            const content = await getSectionContent(url, { returnType: "text" });
            setMarkdownContent(content);
        }
        catch (e) {
            console.error(e);
        }
    }, [setMarkdownContent]);

    useEffect(() => {
        fetchAchievementsContent(achievementsContentUrl);
    }, []);

    return (
        <section className="page-section" id="achievements">
            <div id="achievements-scrollspy"></div>
            <div className="pt-4 mx-4">
                <h2 className="page-section-heading mb-5">Achievements and Interests</h2>

                <Row className="mb-5">
                    <Col md="12">
                        <ReactMarkdown source={markdownContent} renderers={{ heading: HeadingRenderer, link: MarkdownLinkRenderer }} />
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Achievements;