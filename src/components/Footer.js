import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <a
          href="https://www.linkedin.com/in/thomas-brouillet/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in" title="LinkedIn"></i>
        </a>
        <a href="https://github.com/Tooommm" target="_blank" rel="noreferrer">
          <i className="fab fa-fw fa-github" title="GitHub"></i>
        </a>
        <a
          href="https://twitter.com/BrouilletThomas"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-fw fa-twitter" title="Twitter"></i>
        </a>
        <p>
          This website was coded with{" "}
          <i className="fas fa-heart" title="Love"></i> &{" "}
          <i className="fab fa-react" title="React"></i> by Tooommm.
        </p>
      </div>
    </div>
  );
};

export default Footer;
