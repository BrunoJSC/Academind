import { useState } from "react";

export function Player({ symbol, initialName, isActive, onChangeName }) {
  const [isEditing, setIsEdting] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleClick() {
    setIsEdting((isEditing) => !isEditing);
    console.log(isEditing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // const btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>
        {isEditing === true ? "Save" : "Edit"}
      </button>
    </li>
  );
}
