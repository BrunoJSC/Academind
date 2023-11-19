const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function GameBoard({ onSelectSquare, turns, board }) {
  // function handleSelectedSquare(rowIndex, colIndex) {
  // setGameBoard((prevGameBoard) => {
  //   const updateBoard = [
  //     ...prevGameBoard.map((innerArray) => [...innerArray]),
  //   ];
  //   updateBoard[rowIndex][colIndex] = activePlayerSymbol;
  //   return updateBoard;
  // });

  //  onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
