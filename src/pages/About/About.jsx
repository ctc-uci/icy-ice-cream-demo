import React from 'react';
import AboutImage from '../../images/AboutImage.png';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-description">
        <h2>About us!</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="about-image">
        <img src={AboutImage} alt="about" />
      </div>
    </div>
  );
};

export default About;
