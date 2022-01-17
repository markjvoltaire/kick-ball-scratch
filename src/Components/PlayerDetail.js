import React from 'react';

export default function PlayerDetail({ player }) {
  return (
    <div>
      <h1>Player Bio:{player.name}</h1>
      <p>Position:{player.position}</p>
      <p>Team {player.teams.city}</p>
    </div>
  );
}
