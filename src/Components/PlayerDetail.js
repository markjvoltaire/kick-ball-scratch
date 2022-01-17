import React from 'react';

export default function PlayerDetail({ player }) {
  console.log(player);
  return (
    <div>
      <h1>Player Bio:</h1>
      <p>{player.name}</p>
    </div>
  );
}
