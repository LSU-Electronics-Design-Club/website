import React from "react";
import ReactMarkdown from "react-markdown";

const Project = ({ text }) => {
  return (
    <div className="flex-col text-left space-y-4">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default Project;
