import React from "react";
import ReactMarkdown from "react-markdown";

const Project = ({ text }) => {
  return (
    <div className="flex-col text-left">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default Project;
