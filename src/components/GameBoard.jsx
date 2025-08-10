import Square from "./Square";

const GameBoard = ({ board }) => {
  return (
    <div>
      {board.map((val, i) => (
        <Square key={i} value = {val}/>
      ))}
    </div>
  );
};

export default GameBoard;
