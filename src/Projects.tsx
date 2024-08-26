import React, { useState } from "react";
import Project from "./components/Project";
import { FuzzFace, Mixed_Signal_4_Layer } from "./assets/projects";

const projectList = [
  {
    id: "FuzzFace",
    text: FuzzFace,
    image:
      "https://github.com/user-attachments/assets/d238433e-f945-4119-aca1-6a3b554279a7",
  },
  {
    id: "Mixed_Signal_4_Layer",
    text: Mixed_Signal_4_Layer,
    image:
      "https://github.com/JacobParent7/Mixed-Signal-STM32-Dev-Board/assets/105901480/2797847b-17f6-4e3c-a1bc-c3d00f2641d9",
  },
];

const About = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  const currentProject = projectList.find(
    (project) => project.id === selectedProject
  );

  return (
    <div className="p-8">
      <h3 className="text-center mb-8">Select a Project</h3>
      <div className="grid grid-cols-2 gap-8">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer bg-slate-200 rounded-lg flex flex-col"
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.id}
                className="w-full p-16"
              />
            </div>
            <div className="text-center mt-2 text-xl font-bold">
              {project.id}
            </div>
          </div>
        ))}
      </div>
      {currentProject && (
        <div className="mt-8">
          <Project text={currentProject.text} />
        </div>
      )}
    </div>
  );
};

export default About;
