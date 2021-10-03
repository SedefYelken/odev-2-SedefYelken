import React, { useState } from "react";

function ButtonGroup({ sendDataToLetterName }) {
  const [letters_1, setLetters_1] = useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
  ]);
  const [letters_2, setLetters_2] = useState([
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
  ]);
  const [letters_3, setLetters_3] = useState([
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);

  const removeLetter_1 = (e, index, letterName) => {
    const array = [...letters_1]; // make a separate copy of the array
    if (index !== -1) {
      array.splice(index, 1);
      setLetters_1(array);
      sendDataToLetterName(letterName);
    }
  };
  const removeLetter_2 = (e, index, letterName) => {
    const array = [...letters_2]; // make a separate copy of the array
    if (index !== -1) {
      array.splice(index, 1);
      setLetters_2(array);
    }
    sendDataToLetterName(letterName);
  };
  const removeLetter_3 = (e, index, letterName) => {
    const array = [...letters_3]; // make a separate copy of the array
    if (index !== -1) {
      array.splice(index, 1);
      setLetters_3(array);
    }
    sendDataToLetterName(letterName);
  };

  return (
    <div>
      <div>
        {letters_1.map((letter1, i) => (
          <button
            className="circle"
            key={i}
            name={letter1}
            onClick={(e) => removeLetter_1(e, i, letter1)}
          >
            {letter1}
          </button>
        ))}
      </div>
      <div>
        {letters_2.map((letter2, i) => (
          <button
            className="circle"
            key={i}
            name={letter2}
            onClick={(e) => removeLetter_2(e, i, letter2)}
          >
            {letter2}
          </button>
        ))}
      </div>
      <div>
        {letters_3.map((letter3, i) => (
          <button
            className="circle"
            key={i}
            name={letter3}
            onClick={(e) => removeLetter_3(e, i, letter3)}
          >
            {letter3}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ButtonGroup;
