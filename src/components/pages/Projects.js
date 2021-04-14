import ProjectCard from "../ProjectCard";
import React from "react";

const items = [
  {
    title: "Coach Me",
    stacks: ["ruby", "rubyonrails", "javascript", "heroku"],
    description:
      "Cette application web qui vise à mettre en relation des coachs sportifs à domicile et des particuliers.",
    url: "http://www.coach-me.best/",
    github: "https://github.com/nlabrazi/coachme",
  },
  {
    title: "React Widgets",
    stacks: ["react", "javascript", "node-dot-js", "heroku"],
    description:
      "This a collection of widgets with the Youtube and Wikipedia apis",
    url: "https://tooommm-widget-app.netlify.app/",
    github: "https://github.com/Tooommm/widgets",
  },
  {
    title: "To-Do List",
    stacks: ["ruby", "rubyonrails", "react", "heroku"],
    description:
      "Your new app to create To-Do-List. Create With Rail and React. Interracting with a custom API",
    url: "https://todo-tooommm-app.herokuapp.com/",
    github: "https://github.com/Tooommm/todo-application-react",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <ProjectCard items={items} />
    </div>
  );
};

export default Projects;
