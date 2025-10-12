import { useState } from "react";
import "./App.css";

function App() {
  const MAX_NUMBER = 100;
  const MAX_ATTEMPTS = 10;
  const [attempts, setAttempts] = useState<number>(9);
  const [guessedNumber, setGuessedNumber] = useState<number | "">("");
  const [lastGuess, setLastGuess] = useState<number>();
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * MAX_NUMBER) + 1
  );

  const evaluateGuess = () => {
    if (guessedNumber === secretNumber) {
      endGame(true);
    } else if (attempts === 0) {
      endGame(false);
    } else {
      setFeedbackMessage(
        Number(guessedNumber) < secretNumber
          ? "Too low! Try again!"
          : "Too high! Try again!"
      );
    }
  };

  const submitGuess = () => {
    if (!isValidGuess(Number(guessedNumber))) {
      setFeedbackMessage(`Enter a number between 1 and ${MAX_NUMBER}`);
      return;
    }

    setAttempts(attempts - 1);
    evaluateGuess();
    setLastGuess(Number(guessedNumber));
    setGuessedNumber("");
  };

  const resetGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setAttempts(MAX_ATTEMPTS - 1);
    setFeedbackMessage("");
    setGameOver(false);
    setLastGuess(0);
  };

  const isValidGuess = (guess?: number) => {
    return guess !== undefined && guess >= 1 && guess <= 100;
  };

  const endGame = (isWin: boolean) => {
    setGameOver(true);
    setFeedbackMessage(
      isWin
        ? "Congratulations! You guessed the correct number!"
        : `Game over! The correct number was ${secretNumber}`
    );
  };

  return (
    <>
      <div className="game-container">
        <h1>Guess the Number Game</h1>
        <p>Guess the number between 1 and 100</p>
        {!gameOver && (
          <div>
            <label htmlFor="guess">Your guess: {lastGuess}</label>
            <input
              id="guess"
              type="number"
              min={1}
              max={100}
              placeholder="Enter a number"
              disabled={gameOver}
              value={guessedNumber}
              onChange={(e) => setGuessedNumber(Number(e.target.value))}
            />
            <button
              onClick={() => {
                submitGuess();
              }}
              disabled={!isValidGuess(Number(guessedNumber))}
            >
              Submit Guess
            </button>
            <p>Attempts left: {attempts + 1}</p>
          </div>
        )}
        {feedbackMessage && (
          <div className="feedback">
            <p>{feedbackMessage}</p>
          </div>
        )}
        {gameOver && (
          <div>
            <button onClick={() => resetGame()}>Play again</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
