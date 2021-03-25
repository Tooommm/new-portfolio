import "./DownloadButton.css";

import React from "react";
import cv from "../assets/CV_Thomas_Brouillet.pdf";

const DownloadButton = () => {
  return (
    <a className="face-button" href={cv} download>
      <div className="face-primary">
        <span className="icon fa fa-cloud"></span>
        Mon CV
      </div>

      <div className="face-secondary">
        <span className="icon fa fa-hdd-o"></span>
        Size: 152 ko
      </div>
    </a>
  );
};

export default DownloadButton;
