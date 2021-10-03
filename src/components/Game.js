import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import randomWord from "./words";
import img0 from "../image/0.png";
import img1 from "../image/1.png";
import img2 from "../image/2.png";
import img3 from "../image/3.png";
import img4 from "../image/4.png";
import img5 from "../image/5.png";

function Game() {
  const [randomword, setRandomword] = useState(randomWord());
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedLetters, setSelectedLetters] = useState("");
  const images = [img0, img1, img2, img3, img4, img5];
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);
  const maxWrong = 5;

  const sendSelectedLetter = (letter) => {
    // the callback. Use a better name
    setSelectedLetter(letter);
    setSelectedLetters([...selectedLetters, letter]);

    if (!randomword.includes(letter.toLowerCase())) {
      setWrongAnswerCount(wrongAnswerCount + 1);
    }
  };

  const gameReset = () => {
    setRandomword(randomWord());
    setSelectedLetter(null);
    setSelectedLetters("");
    setWrongAnswerCount(0);
  };

  let gameState = <ButtonGroup sendDataToLetterName={sendSelectedLetter} />;
  let gameRestart = "";

  if (wrongAnswerCount >= maxWrong) {
    gameState = (
      <p className="Hangman-youLose">
        
        <span >GAME OVER!</span>
        
      </p>
    );
    gameRestart = (
      <button className="btn-restart" onClick={gameReset}>
        Try Again
      </button>
    );
  }

  if (
    randomword
      .toUpperCase()
      .split("")
      .map((ltr) => selectedLetters.includes(ltr))
      .every((x) => x === true)
  ) {
    gameState = (
      <p className="Hangman-youWin" style={{ color: "green" }}>
        You win!
      </p>
    );
    gameRestart = (
      <button className="btn-restart" onClick={gameReset}>
        Restart{" "}
      </button>
    );
  }
  return (
    <div>
      <br />
      <br />

      <div>
        {randomword.split("").map((word, i) =>
          selectedLetters.includes(word.toUpperCase()) ? (
            <span className="letter" key={i} name={word}>
              {word}
            </span>
          ) : wrongAnswerCount >= maxWrong ? (
            <span
              className="letter"
              key={i}
              name={word}
              style={{ color: "red" }}
            >
              {word}
            </span>
          ) : (
            <span className="letter" key={i} name={word}>
              _
            </span>
          )
        )}
      </div>
      <br />
      <div>
        {gameState}
        {gameRestart}
      </div>

      <img className="" src={images[wrongAnswerCount]} />
    </div>
  );
}

export default Game;
