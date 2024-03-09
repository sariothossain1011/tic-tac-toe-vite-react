import { useState } from "react";
import Game from "./components/Game/Game";
import Board from "./components/board/Board";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [XIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  // const currentSquare = history[history.length - 1];
  const currentSquare = history[currentMove];

  function handlePlay(nextSquares) {
    setXIsNext(!XIsNext);
    // setHistory([...history, nextSquares]);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move #${move}`;
    } else {
      description = `Go to start the game`;
    }
    return (
      <li
        key={move}
        className="text-xl font-semibold px-4 py-2 bg-slate-100 rounded-md my-2"
      >
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="flex flex-col pt-10 gap-10 md:flex-row justify-center  ">
        <Board XIsNext={XIsNext} squares={currentSquare} onPlay={handlePlay} />
        {/* <Game  history={history} jumpTo={jumpTo}/> */}
        <div>
          <ol> {moves}</ol>
        </div>
      </div>
    </>
  );
}

export default App;
