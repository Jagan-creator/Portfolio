import React from "react";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#f0a10e]">
          Projects
        </p>
        <h2 className="py-4">Things I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem />
        </div>
      </div>
    </div>
  );
}

export default Projects;
