import React from 'react';
import './DownloadButton.css'
import cv from "../assets/CV.pdf";

const DownloadButton = () => {
  return (
      <a class="face-button" href={cv} download>

        <div class="face-primary">
          <span class="icon fa fa-cloud"></span>
          Mon CV
        </div>

        <div class="face-secondary">
          <span class="icon fa fa-hdd-o"></span>
          Size: 2.1 mo
        </div>

      </a>
  )
}

export default DownloadButton
