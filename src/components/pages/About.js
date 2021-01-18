import React from 'react';
import ProfileCard from '../ProfileCard';
import DownloadButton from '../DownloadButton'
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <ProfileCard />
        <div className="text-description">
          <h2>Salut! Moi c'est Thomas.</h2>
          <br/>
          <p>Passionné par le code, je suis un tout jeune développeur à la recherche de nouveaux projets incroyables! J’ai été fraichement formé au formé au Wagon et je suis maintenant totalement opérationnel,</p>
          <br/>
          <p>J’ai été formé avec <strong>Ruby</strong>, <strong>Ruby On Rails</strong> et <strong>Javascript</strong> je développe également des applications incroyable avec <strong>React</strong> et <strong>Node.js</strong>. N’hésitez pas à me contacter ou télécharger mon CV ci-dessous.</p>
          <br/>
          <div className="resume">
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
