import styles from "./drawing-board.module.css";

const DrawingBoard = ({ numberOfMistakes }: { numberOfMistakes: number }) => {
  const head = (
    <div className={styles.head} key="head">
      <div className={`${styles.eye} ${styles.eyeLeft}`}></div>
      <div className={`${styles.eye} ${styles.eyeRight}`}></div>
      <div className={styles.mouth}></div>
    </div>
  );
  const body = (
    <div className={`${styles.line} ${styles.body}`} key="body"></div>
  );
  const leftHand = (
    <div
      className={`${styles.line} ${styles.hand} ${styles.handLeft}`}
      key="left-hand"
    ></div>
  );
  const rightHand = (
    <div
      className={`${styles.line} ${styles.hand} ${styles.handRight}`}
      key="right-hand"
    ></div>
  );
  const leftLeg = (
    <div
      className={`${styles.line} ${styles.leg} ${styles.legLeft}`}
      key="left-leg"
    ></div>
  );
  const rightLeg = (
    <div
      className={`${styles.line} ${styles.leg} ${styles.legRight}`}
      key="right-leg"
    ></div>
  );

  const bodyParts = [head, body, leftHand, rightHand, leftLeg, rightLeg];

  return (
    <div className={styles.board}>
      <div className={`${styles.line} ${styles.traverse}`}></div>
      <div className={`${styles.line} ${styles.noose}`}></div>
      <div className={`${styles.line} ${styles.trunk}`}></div>
      <div className={`${styles.line} ${styles.basement}`}></div>
      <div className={styles.hangman}>
        {bodyParts.slice(0, numberOfMistakes)}
      </div>
    </div>
  );
};

export default DrawingBoard;
