import { useState } from "react";
import Square from "../square/Square";
import CalculateWinner from "../calculateWinner/CalculateWinner";

export default function Board({XIsNext,squares, onPlay }) {
  const winner = CalculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = "Next Player " + (XIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (XIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
    // setSquares(nextSquares);
    // setXIsNext(!XIsNext);
  }
  return (
    <>
      <div className=" flex flex-col justify-center items-center align-middle">
        <div className="text-2xl font-semibold pb-2">{status}</div>
        <div className=" grid grid-cols-3 gap-4 ">
          <Square
            value={squares[0]}
            onSquareClick={() => {
              handleClick(0);
            }}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => {
              handleClick(1);
            }}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => {
              handleClick(2);
            }}
          />
          <Square
            value={squares[3]}
            onSquareClick={() => {
              handleClick(3);
            }}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => {
              handleClick(4);
            }}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => {
              handleClick(5);
            }}
          />
          <Square
            value={squares[6]}
            onSquareClick={() => {
              handleClick(6);
            }}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => {
              handleClick(7);
            }}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => {
              handleClick(8);
            }}
          />
        </div>
      </div>
    </>
  );
}
