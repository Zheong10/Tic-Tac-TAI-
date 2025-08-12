import Square from "./Square";

const GameBoard = ({ board, handledSquareClick }) => {
  return (
    <div className="grid grid-cols-3 gap-2 w-[300px] ">
      {board.map((val, i) => (
        <Square key={i} value={val} onClick={() => handledSquareClick(i)} />
      ))}
    </div>
  );
};

export default GameBoard;
