import './Education.css'

export default function Education() {
  return (
    <section className="section-card" id="education">
      <h2>Education</h2>
      <ul>
        <li>
            Schooling:<ul><li>Medical</li></ul>
            <div className="edu-line">
              <span>MRA DAV Public School </span>
              <span><i>Solan, Himachal Pradesh</i> (2022)</span>
            </div>
        </li>
        <li>
          Integrated Master's in Science:<ul><li>Major: Mathematics</li><li>Minor:Computer Science</li></ul> 
          <div className="edu-line">
              <span>National Institute of Science Education and Research </span>
              <span><i>Bhubneshwar, India</i> (2023-2028)</span>
            </div>
        </li>


        
      </ul>
    </section>
  );
}
