import { useState } from "react";

type squareProps = {
  value: null | string;
  onSquareClick: squrefunction;
};

type squrefunction = () => void;

function Square({ value, onSquareClick }: squareProps) {
  // const [value, setValue] = useState<string | null>(null);
  // const [counter, setcounter] = useState<number>(0);
  // function handleClick() {
  //   // setValue("O");
  //   value = "X";
  // }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  // const [count,setcount] = useState(0);
  // const [count1,setcount] = useState(1);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick} />
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick} />
      </div>
    </>
  );
}

export default Board;
