import { useState } from "react";
import "./styles/style.css";
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";

function App() {
  const choices: { name: string; image: string }[] = [
    { name: "rock", image: rock },
    { name: "paper", image: paper },
    { name: "scissors", image: scissors },
  ];
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const getRandomNumber = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  const determineWinner = (player: string, computer: string): string => {
    if (player === computer) {
      return "It's a tie!";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  };

  const play = (choice: { name: string; image: string }) => {
    const comp = choices[getRandomNumber(choices.length)];
    const resultText = determineWinner(choice.name, comp.name);

    setPlayerChoice(choice.name);
    setComputerChoice(comp.name);
    setResult(resultText);
  };

  return (
    <>
      <div className="game-container">
        <h1>Rock Paper Scissors</h1>
        <div className="choices">
          {choices.map((choice, index) => (
            <button key={index} onClick={() => play(choice)}>
              <img src={choice.image} alt={choice.name} />
              {choice.name.toUpperCase()}
            </button>
          ))}
        </div>
        {playerChoice && computerChoice && (
          <div className="results">
            <p>
              You chose: <strong>{playerChoice}</strong>
              <img
                src={choices.find((c) => c.name === playerChoice)?.image}
                alt={playerChoice}
              />
            </p>
            <p>
              Computer chose: <strong>{computerChoice}</strong>
              <img
                src={choices.find((c) => c.name === computerChoice)?.image}
                alt={computerChoice}
              />
            </p>
            <h2>{result}</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
