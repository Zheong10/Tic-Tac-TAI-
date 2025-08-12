import React, { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import Square from "./components/Square";

//import aiOpenRouter from "./utils/aiOpenRouter"; // Assuming you have an AI function to handle bot moves
import { aiOpenRouter } from "./utils/aiOpenRouter";

const App = () => {
  // State for the 3*3 board (9 cells)
  const [board, setBoard] = useState(Array(9).fill(null));

  // Is it the player turn?
  const [isXNext, setIsXNext] = useState(true);

  // who won the game? (X or O or Draw)
  const [winner, setWinner] = useState(null);

  // Score tracking
  const [score, setScore] = useState({ X: 0, O: 0 });

  //when a player clicks a square
  const handledSquareClick = (index) => {
    // If the square is already filled or the game is won, do nothing
    if (board[index] || winner) return;

    // Create a new board state with the clicked square filled
    const newBoard = [...board];

    newBoard[index] = "X";
    setBoard(newBoard);
    setIsXNext(false); // Switch to bot's turn
  };
  useEffect(() => {
    // if its bot's turn and the game is not won
    if (!isXNext && !winner) {
      // Call the AI function to get the bot's move
      const aiTurn = async () => {
        const move = await aiOpenRouter(board);

        if (move !== null && board[move] === null) {
          const newBoard = [...board];
          newBoard[move] = "O"; // Bot plays as 'O'
          setBoard(newBoard);
          setIsXNext(true); // Switch back to player's turn
        }
      };

      const timeout = setTimeout(aiTurn, 600); // Delay for bot's move
      return () => clearTimeout(timeout); // Cleanup the timeout

      // const newBoard = [...board];

      // // Bot's simple AI: choose the first empty square
      // const emptySquares = newBoard
      //   .map((val, i) => (val === null ? i : null))
      //   .filter((i) => i !== null);
      // const randomIndex = Math.floor(Math.random() * emptySquares.length);
      // const botMove = emptySquares[randomIndex];
      // newBoard[botMove] = "O";
      // setBoard(newBoard);
      // setIsXNext(true); // Switch back to player's turn
    }
  }, [board, isXNext, winner]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F172A] text-white">
      <h1 className="text-3xl font-bold mb-4">Tic Tac TAI 🤖 </h1>

      <ScoreBoard score={score} />

      <GameBoard board={board} handledSquareClick={handledSquareClick} />
    </div>
  );
};

export default App;
