import React from "react";

export const MarkdownLinkRenderer = (props) => {
    return props.href.startsWith("/") ?
        <a href={props.href}>{props.children}</a> :
        <a href={props.href} target="_blank" rel="nofollow noopener noreferrer">{props.children}</a>;
};