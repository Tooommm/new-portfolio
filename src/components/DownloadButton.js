import "./DownloadButton.css";

import React from "react";
import cv from "../assets/CV_Thomas_Brouillet.pdf";

const DownloadButton = () => {
  return (
    <a class="face-button" href={cv} download>
      <div class="face-primary">
        <span class="icon fa fa-cloud"></span>
        Mon CV
      </div>

      <div class="face-secondary">
        <span class="icon fa fa-hdd-o"></span>
        Size: 154 ko
      </div>
    </a>
  );
};

export default DownloadButton;
