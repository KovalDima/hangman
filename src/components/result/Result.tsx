import styles from "./result.module.css";

const Result = ({ isLose, isWin }: { isLose: boolean; isWin: boolean }) => {
  return (
    <p className={styles.result}>
      {isLose && "Nice try 😵 Refresh to try again 🤔"}
      {isWin && "Good job 🙃 Refresh if wanna try again 😏"}
    </p>
  );
};

export default Result;
