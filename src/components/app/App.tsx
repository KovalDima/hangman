import { useEffect, useState } from "react";
import Result from "../result/Result";
import DrawingBoard from "../drawing-board/DrawingBoard";
import Word from "../word/Word";
import Keyboard from "../keyboard/Keyboard";
import words from "../../assets/words.json";
import styles from "./app.module.css";

function App() {
  const [wordToGuess] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  );
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const correctLetters = selectedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );
  const incorrectLetters = selectedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLose = incorrectLetters.length >= 6;
  const isWin = wordToGuess
    .split("")
    .every((letter) => correctLetters.includes(letter));

  useEffect(() => {
    const onEnterPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        window.location.reload();
      }
    };

    document.body.addEventListener("keypress", onEnterPress);

    return () => document.body.removeEventListener("keypress", onEnterPress);
  }, []);

  return (
    <div className={styles.app}>
      <Result isLose={isLose} isWin={isWin} />
      <DrawingBoard numberOfMistakes={incorrectLetters.length} />
      <Word
        wordToGuess={wordToGuess}
        correctLetters={correctLetters}
        isLose={isLose}
        isWin={isWin}
      />
      <Keyboard
        selectedLetters={selectedLetters}
        setSelectedLetters={setSelectedLetters}
        correctLetters={correctLetters}
        incorrectLetters={incorrectLetters}
        isKeyboardDisable={isWin || isLose}
      />
    </div>
  );
}

export default App;
