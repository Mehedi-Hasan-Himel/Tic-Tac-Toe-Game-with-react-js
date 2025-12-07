export default function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="aspect-square bg-white border-4 border-black rounded-2xl
                 text-7xl font-black text-black
                 transition-all duration-300 hover:bg-gray-100 active:scale-95
                 flex items-center justify-center"
    >
      {value}
    </button>
  );
}