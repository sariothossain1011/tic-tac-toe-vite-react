

export default function Square({ value, onSquareClick }) {
    return (
      <button
        onClick={onSquareClick}
        className="h-16 w-16 text-3xl font-bold border-4 border-gray-400"
      >
        {value}
      </button>
    );
  }