import { useState, useCallback } from "react";
import Board from "./components/Board";
import GameStatus from "./components/GameStatus";
import ResetButton from "./components/ResetButton";

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function calculateWinner(squares) {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);
  const isDraw = board.every(cell => cell !== null) && !winner;

  const handleClick = useCallback((i) => {
    if (board[i] || winner) return;
    setBoard(prev => {
      const next = [...prev];
      next[i] = isXNext ? "X" : "O";
      return next;
    });
    setIsXNext(prev => !prev);
  }, [board, winner, isXNext]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-6xl font-black text-black mb-10 tracking-tighter">
          TIC TAC TOE
        </h1>

        <GameStatus winner={winner} isDraw={isDraw} currentPlayer={isXNext ? "X" : "O"} />
        <Board board={board} onSquareClick={handleClick} />
        <ResetButton onReset={resetGame} />
      </div>
    </div>
  );
}