import { useState } from "react";
import "./styles/style.css";

function App() {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState<string>("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [isDraw, setIsDraw] = useState<boolean>(false);

  const isCellOccupied = (index: number): boolean => {
    return board[index] !== "";
  };

  const isGameOver = (): boolean => {
    return winner !== null || isDraw;
  };

  const isMoveInvalid = (index: number): boolean => {
    return isCellOccupied(index) || isGameOver();
  };

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = (): boolean => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningCombinations.some(
      ([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]
    );
  };

  const isBoardFull = (): boolean => {
    return board.every((cell) => cell != "");
  };

  const updateGameState = () => {
    if (checkWinner()) {
      setWinner(currentPlayer);
    } else if (isBoardFull()) {
      setIsDraw(true);
    } else {
      switchPlayer();
    }
  };

  const makeMove = (index: number) => {
    if (isMoveInvalid(index)) {
      return;
    }

    board[index] = currentPlayer;
    updateGameState();
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <>
      <div className="game-container">
        <h1>Tic Tac Toe</h1>
        {!winner && !isDraw && (
          <div className="turn-indicator">Player {currentPlayer}'s turn</div>
        )}
        <div className="board">
          {board.map((cell, index) => (
            <div className="cell" key={index} onClick={() => makeMove(index)}>
              {cell}
            </div>
          ))}
        </div>

        {winner && <div className="winner">Player {currentPlayer} Wins!</div>}
        {isDraw && !winner && <div className="draw-message">It's a draw!</div>}

        <button onClick={() => resetGame()}>Reset Game</button>
      </div>
    </>
  );
}

export default App;
