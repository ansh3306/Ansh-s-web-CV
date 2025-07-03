import './Education.css'


export default function Workshops() {
  return (
    <section className="section-card" id="workshops">
      <h2>Workshops & Summer Schools</h2>
      <ul>
        <li>Foundational Leacture Series on Theoretical Computer Science
          <div className="edu-line">
              <span>Institute Of Mathematical Sciences</span>
              <span><i>Chennai, Tamil Nadu</i> (January 2,2025 - January 8,2025)</span>
            </div> </li>
        <li>
          Qiskit Global Summer School 2025
          <div className="edu-line">
              <span>IBM </span>
              <span><i>Remote</i> (July 2025)</span>
            </div> 
        </li>
      </ul>
    </section>
  );
}
