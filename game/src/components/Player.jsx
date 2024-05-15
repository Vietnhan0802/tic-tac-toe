import React from "react";
import { useState } from "react";
function Player({ name, symbol, isActive ,onChangeName}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const handleEditclick = () => {
    setIsEditing((prev) => !prev);
    onChangeName(symbol,playerName)
  };
  let playName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
    );
  }
  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {playName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditclick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
