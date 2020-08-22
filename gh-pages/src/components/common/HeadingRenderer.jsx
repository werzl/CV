// https://github.com/rexxars/react-markdown/issues/69
import React from "react";

export const flatten = (text, child) => {
    return typeof child === "string"
        ? text + child
        : React.Children.toArray(child.props.children).reduce(flatten, text);
};

export const HeadingRenderer = (props) => {
    let children = React.Children.toArray(props.children);
    let text = children.reduce(flatten, "");
    let slug = text.toLowerCase().replace(/\W/g, "-");
    return React.createElement("h" + props.level, { id: slug }, props.children);
};