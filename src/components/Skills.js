import './Skills.css';

const skills = [
  { name: 'Python', level: 95 },
  { name: 'LaTeX', level: 80 },
  { name: 'Qiskit', level: 50 },
  { name: 'Mathematics(ofcourse)', level: 85 },
  { name: 'Web-Development (Front-End)', level: 95 },
  { name: 'Data Analysis and Data Visualization', level: 75 },
  { name: 'Research', level: 95 },
  { name: 'Git and Github', level: 70 },
  // Add more as needed
];

export default function Skills({ darkMode }) {
  return (
    <section className="section-card" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`skill-item ${darkMode ? 'dark-skill' : ''}`}
          >
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="skill-level">{skill.level}% proficient</p>
          </div>
        ))}
      </div>
    </section>
  );
}
