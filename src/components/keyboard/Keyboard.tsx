import { useRef, useCallback, useEffect, useState } from "react";
import styles from "./keyboard.module.css";

const Keyboard = ({
  selectedLetters,
  setSelectedLetters,
  correctLetters,
  incorrectLetters,
  isKeyboardDisable,
}: {
  selectedLetters: string[];
  setSelectedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  correctLetters: string[];
  incorrectLetters: string[];
  isKeyboardDisable: boolean;
}) => {
  const keysRef = useRef([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);

  const [pressedKey, setPressedKey] = useState<string>("");

  useEffect(() => {
    const onKeyPressDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || isKeyboardDisable) return;
      setPressedKey(e.key.toLowerCase());
    };

    const onKeyPressUp = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-zA-Z]$/) || e.ctrlKey || isKeyboardDisable) {
        return;
      }

      e.preventDefault();

      addSelectedLetter(key);
      setPressedKey("");
    };

    document.body.addEventListener("keydown", onKeyPressDown);
    document.body.addEventListener("keyup", onKeyPressUp);

    return () => {
      document.body.removeEventListener("keydown", onKeyPressDown);
      document.body.removeEventListener("keyup", onKeyPressUp);
    };
  }, [selectedLetters]);

  const addSelectedLetter = useCallback(
    (letter: string) => {
      if (selectedLetters.includes(letter)) {
        return;
      }

      setSelectedLetters((prevLetters) => [...prevLetters, letter]);
    },
    [selectedLetters]
  );

  return (
    <>
      <div className={styles.keyboard}>
        {keysRef.current.map((key) => {
          const pressedClass = pressedKey === key ? styles.pressed : "";
          const activeClass = correctLetters.includes(key) ? styles.active : "";
          const isDisabled = incorrectLetters.includes(key);
          return (
            <button
              key={key}
              className={`${styles.key} ${pressedClass} ${activeClass}`}
              disabled={isDisabled || isKeyboardDisable}
              onClick={() => addSelectedLetter(key)}
            >
              {key}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Keyboard;
