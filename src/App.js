import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Workshops from './components/Workshops';
// import Projects from './components/Projects';
import Skills from './components/Skills';
import Coursework from './components/Coursework';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [bloodMode, setBloodMode] = useState(false);

  const handleSecretTrigger = () => {
    setBloodMode(true);
    setTimeout(() => {
      window.location.href = "https://example.com"; // Replace with your desired link
    }, 4000);
  };

  return (
    <BrowserRouter basename="/ansh-s-web-cv">
      <div className={`app-wrapper ${darkMode ? 'dark' : 'light'} ${bloodMode ? 'blood-mode' : ''}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} onSecretTrigger={handleSecretTrigger} />

        <main>
          <About onSecretTrigger={handleSecretTrigger} />
          <Education />
          <Certifications />
          <Workshops />
          {/* <Projects /> */}
          <Skills darkMode={darkMode} />
          <Coursework />
          <Contact />
        </main>

        <Footer />

        {bloodMode && (
          <div className="blood-overlay">
            <div className="blood-message">You should not have clicked this</div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
