import React, { useState } from 'react';
import mainPic from './images/Main1.jpeg';
import './About.css';

export default function About() {
  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <section className="section-card" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img 
          src={mainPic} 
          alt="Ansh D" 
          className="profile-pic"
          onClick={() => setShowFullImage(true)}
        />
        <p>
          HI! I am Ansh. I am a passionate and curious student pursuing a Master's degree in <b>Mathematics</b> with a <b>minor in Computer Science</b>. Currently <b>self-studying quantum computing</b>, I am deeply interested in the intersection of mathematical structures, quantum theory, and computational methods. My academic journey has equipped me with strong foundations in linear algebra, abstract algebra, and algorithms, which I actively apply in exploring quantum algorithms and quantum information theory.<br /><br />


          I am particularly driven by the challenge of building intuition for quantum phenomena through rigorous mathematics and computational experimentation. I am currently attending Qiskit Global Summer School 2025(QGSS2025), and I am eager to contribute to projects that push the boundaries of quantum technology.<br /><br />


          Beyond academics, I am enthusiastic about calisthenics and pretty much anything that keeps me moving and help me cultivate discipline and resilience — qualities I bring into my problem-solving approach.


        </p>
      </div>

      {showFullImage && (
        <div className="image-overlay" onClick={() => setShowFullImage(false)}>
          <img src={mainPic} alt="Ansh D Full" className="full-image" />
        </div>
      )}
    </section>
  );
}
  