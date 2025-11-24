import React, { useState } from "react";
import "./App.css";

// Import images from src/assets. Place your images into `src/assets/` with these names.
import photoLeftV1 from "./assets/photo_left_v1.svg";
import photoRightV1 from "./assets/photo_right_v1.svg";
import photoLeftV2 from "./assets/logo.png";
import photoRightV2 from "./assets/logo2.png";

export default function Title({ size = "2rem", color = "#000" }) {
  const setA = [photoLeftV1, photoRightV1];
  const setB = [photoLeftV2, photoRightV2];

  const [useAlt, setUseAlt] = useState(false);
  const [voting, setVoting] = useState(false);
  const [selected, setSelected] = useState(null);  

  const images = useAlt ? setB : setA;

  function handleToggle() {
    setUseAlt((s) => !s);
    setSelected(null);
    setVoting(false);
  }

  function handleVoteClick() {
    setVoting(true);
    setSelected(null);
  }

  function choose(index) {
    if (!voting) return;
    setSelected(index);
    setVoting(false);
  }

  return (
    <div className="title-root">
      <h1 style={{ fontSize: size, color: color }}>Parikshit Zindabad</h1>
      <div className="subtitle">aapki baaar Parikshit sa
        rkar</div>

      <div className="image-card">
        <div className="image-pair">
          <div
            className={`image-wrap ${selected === 0 ? "selected" : ""} ${voting ? "voting" : ""}`}
            onClick={() => choose(0)}
          >
            <img src={images[0]} alt="left" className="image" />
            {selected === 0 && <div className="badge">Better</div>}
            {voting && <div className="vote-overlay">Click to choose</div>}
          </div>

          <div
            className={`image-wrap ${selected === 1 ? "selected" : ""} ${voting ? "voting" : ""}`}
            onClick={() => choose(1)}
          >
            <img src={images[1]} alt="right" className="image" />
            {selected === 1 && <div className="badge">Better</div>}
            {voting && <div className="vote-overlay">Click to choose</div>}
          </div>
        </div>

        <div className="controls">
          <button className="btn" onClick={handleToggle}>
            Swap Images !!!
          </button>
          <button className="btn primary" onClick={handleVoteClick}>
            Which one is better ?
          </button>
        </div>
        <div className="hint">
          {useAlt ? "Showing alternate pair" : "Showing primary pair"}
          {selected !== null && ` — You chose: ${selected === 0 ? "Left" : "Right"}`}
        </div>
      </div>
    </div>
  );
}