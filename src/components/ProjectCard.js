import "./ProjectCard.css";

import Button from "./Button";
import React from "react";

const ProjectCard = ({ items }) => {
  const renderedItems = items.map((item, index) => {
    return (
      <div className="card-holder" key={item.title}>
        <div className="card-title">
          <h3>{item.title}</h3>
          <div className="stacks">
            {item.stacks.map((s) => (
              <i className={`logo bounce ${s}`} title={s} key={s} />
            ))}
          </div>
        </div>
        <div className="description">
          <p>{item.description}</p>
        </div>
        <div className="card-footer">
          <a
            href={item.url}
            className="button-project"
            target="_blank"
            rel="noreferrer"
          >
            <Button text="Let's Go" />
          </a>
          <a
            href={item.github}
            className="button-project"
            target="_blank"
            rel="noreferrer"
          >
            <Button text="GitHub" />
          </a>
        </div>
      </div>
    );
  });

  return <div className="project-card">{renderedItems}</div>;
};

export default ProjectCard;
