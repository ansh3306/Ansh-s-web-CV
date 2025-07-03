export default function Header({ darkMode, setDarkMode, onSecretTrigger }) {
  return (
    <header className="header">
      <h1 onClick={onSecretTrigger} style={{ cursor: 'pointer' }}>
        Ansh Droch
      </h1>
      <div className="header-actions">
        <a
          href="/Ansh_Droch_CV.pdf"
          className="btn-cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider">
            <span className="icon">{darkMode ? '🌙' : '🌞'}</span>
          </span>
        </label>
      </div>
    </header>
  );
}
