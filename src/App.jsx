import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import Square from "./components/Square";

const App = () => {
  // State for the 3*3 board (9 cells)
  const [board, setBoard] = useState(Array(9).fill(null));

  // Is it the player turn?
  const [isXNext, setIsXNext] = useState(true);

  // who won the game? (X or O or Draw)
  const [winner, setWinner] = useState(null);

  // Score tracking
  const [score, setScore] = useState({ X: 0, O: 0 });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F172A] text-white">
      <h1 className="text-3xl font-bold mb-4">Tic Tac TAI 🤖 </h1>

      <ScoreBoard score={score} />

      <GameBoard
        board={board}/>

    </div>
  );
};

export default App;
