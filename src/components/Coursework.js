import './Coursework.css';

export default function Coursework() {
  return (
    <section className="section-card" id="coursework">
      <h2>Coursework & Extracurricular Learnings</h2>
      <div className="coursework-container">
        <div className="coursework-column">
          <h3>College Coursework</h3>
          <ul>
            <li><i>M201:</i> Real Analysis</li>
            <li><i>M202:</i> Group Theory</li>
            <li><i>M203, CS202:</i> Discrete Mathematics</li>
            <li><i>M204:</i> Metric Spaces</li>
            <li><i>M205:</i> Linear Algebra</li>
            <li><i>M206:</i> Probability Theory</li>
            <li><i>CS201:</i> Theory of Computation</li>

            
          </ul>
        </div>
        <div className="coursework-column">
          <h3>Self-Learning</h3>
          <ul>
            <li>Quantum Computing (Nielsen & Chuang)</li>
            <li>Quantum Programing (QGSS2025)</li>
            <li>Basics of Quantum Information (IBM Traning)</li>
            <li>Fundamentals of Quantum algorithms (IBM Training)</li>
            <li>General formation of Quantum Information (IBM Traning)</li>
            <li>Foundation of Quantum Error Correction (IBM Traning)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
