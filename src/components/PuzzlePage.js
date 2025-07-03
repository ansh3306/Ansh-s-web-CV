import React, { useState, useEffect } from 'react';
import './PuzzlePage.css';

const puzzles = [
  {
    question: "I am an odd number. Take away one letter and I become even. What am I?",
    answer: "seven"
  },
  {
    question: "What has keys but can’t open locks?",
    answer: "piano"
  },
  {
    question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
    answer: "m"
  },
  {
    question: "The more of me you take, the more you leave behind. What am I?",
    answer: "footsteps"
  }
  // Add more puzzles here!
];

export default function PuzzlePage() {
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [showGoodbye, setShowGoodbye] = useState(false);

  useEffect(() => {
    const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    setCurrentPuzzle(randomPuzzle);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim().toLowerCase() === currentPuzzle.answer.toLowerCase()) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Change to your link
    } else {
      const newAttempts = attemptsLeft - 1;
      setAttemptsLeft(newAttempts);
      if (newAttempts <= 0) {
        setShowGoodbye(true);
        setTimeout(() => {
          // window.close(); // Browsers block this usually
        }, 3000);
      }
    }
    setUserInput('');
  }

  if (!currentPuzzle) return <div className="puzzle-container">Loading puzzle...</div>;

  return (
    <div className="puzzle-container">
      <h1 className="puzzle-title">🧠 Solve this to proceed...</h1>
      <p className="puzzle-question">{currentPuzzle.question}</p>

      {!showGoodbye ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Your answer..."
              className="puzzle-input"
              required
            />
            <button type="submit" className="puzzle-button">Submit</button>
          </form>
          <p className="attempts-left">Attempts left: {attemptsLeft}</p>
        </>
      ) : (
        <div className="goodbye-message conjuring-font">You should not have clicked this...</div>
      )}
    </div>
  );
}
