import React from "react";
import ProjectItem from "./ProjectItem";
import mimikyuImg from "../public/assets/projects/mimikyu-day-off-preview.png";
import jungleImg from "../public/assets/projects/jungle-preview.jpeg";
import schedulerImg from "../public/assets/projects/scheduler-preview.png";
import tweeterImg from "../public/assets/projects/tweeter-preview.png";
import viteDashImg from "../public/assets/projects/vite-dash-preview.png";

function Projects() {
  return (
    <div
      id="projects"
      className="w-full"
    >
      <div className="max-w-[1240px] mx-auto py-24 px-14">
        <p className="text-xl tracking-widest uppercase text-[#f0a10e]">
          Projects
        </p>
        <h2 className="py-4">Things I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Mimikyu's Day Off"
            backgroundImg={mimikyuImg}
            framework="Next.js / Prisma"
            projectUrl="/mimikyu"
          />
          <ProjectItem
            title="Jungle"
            backgroundImg={jungleImg}
            framework="Ruby / Rails"
            projectUrl="/jungle"
          />
          <ProjectItem
            title="Scheduler"
            backgroundImg={schedulerImg}
            framework="JavaScript / API / Testing"
            projectUrl="/scheduler"
          />
          <ProjectItem
            title="Tweeter"
            backgroundImg={tweeterImg}
            framework="Javascript / Sass / jQuery"
            projectUrl="/tweeter"
          />
          <ProjectItem
            title="Vite Dash"
            backgroundImg={viteDashImg}
            framework="Next.js / Vite / Tremor"
            projectUrl="/viteDash"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
