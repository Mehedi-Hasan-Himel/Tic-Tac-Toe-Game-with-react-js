import Square from "./Square";

export default function Board({ board, onSquareClick }) {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto bg-white p-8 rounded-3xl shadow-2xl border-4 border-black">
      {board.map((value, i) => (
        <Square key={i} value={value} onClick={() => onSquareClick(i)} />
      ))}
    </div>
  );
}