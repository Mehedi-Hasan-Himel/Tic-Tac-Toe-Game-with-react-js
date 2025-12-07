export default function GameStatus({ winner, isDraw, currentPlayer }) {
  const message = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "It's a Draw!"
    : `Next: ${currentPlayer}`;

  return (
    <div className={`text-center text-2xl font-bold mb-10 transition-all ${winner ? "scale-110" : ""}`}>
      {message}
    </div>
  );
}