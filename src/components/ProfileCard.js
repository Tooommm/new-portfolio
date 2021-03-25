import "./ProfileCard.css";

import React from "react";
import javascript from "../assets/javascript.svg";
import profilepicture from "../assets/profilepicture2.png";
import rails from "../assets/rubyonrails.svg";
import react from "../assets/react.svg";
import ruby from "../assets/ruby.svg";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profilepic-holder">
        <a
          href="https://www.linkedin.com/in/thomas-brouillet/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="profilepic"
            src={profilepicture}
            alt="Thomas Brouillet"
          />
        </a>
        <div className="infos">
          <h4>Thomas Brouillet</h4>
          <p>Paris, France</p>
        </div>
      </div>
      <div className="text">
        <h3>Stacks</h3>
      </div>
      <div className="stacks-holder">
        <img
          className="logo-profile bounce ruby"
          src={ruby}
          alt="Ruby"
          title="Ruby"
        />
        <img
          className="logo-profile bounce rubyonrails"
          src={rails}
          alt="RubyOnRails"
          title="RubyOnRails"
        />
        <img
          className="logo-profile bounce react"
          src={react}
          alt="React"
          title="React"
        />
        <img
          className="logo-profile bounce javascript"
          src={javascript}
          alt="Javascript"
          title="Javascript"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
