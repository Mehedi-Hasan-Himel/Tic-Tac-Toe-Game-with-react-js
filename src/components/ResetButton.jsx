export default function ResetButton({ onReset }) {
  return (
    <button
      onClick={onReset}
      className="mt-12 w-full max-w-sm mx-auto block py-5 px-8
                 text-xl font-bold text-white bg-black rounded-2xl
                 hover:bg-gray-900 active:scale-95 transition-all shadow-lg"
    >
      NEW GAME
    </button>
  );
}