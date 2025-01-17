import styles from "./word.module.css";

const Word = ({
  wordToGuess,
  correctLetters,
  isLose,
  isWin,
}: {
  wordToGuess: string;
  correctLetters: string[];
  isLose: boolean;
  isWin: boolean;
}) => {
  return (
    <p className={`${styles.word} ${isWin ? styles.winner : ""}`}>
      {wordToGuess.split("").map((letter: string, i: number) => {
        const isLetterIncluded = correctLetters.includes(letter);
        return (
          <span
            key={i}
            className={`${styles.word__letter} ${
              !isLetterIncluded ? styles.wrong : ""
            }`}
          >
            {isLetterIncluded || isLose ? letter : null}
          </span>
        );
      })}
    </p>
  );
};

export default Word;
