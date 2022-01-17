import React from 'react';
import { Link } from 'react-router-dom';
export default function PlayersLists({ players }) {
  return (
    <div>
      <h3>The Players Of The League </h3>

      {players.map((player) => (
        <div className="teams" key={player.id}>
          <Link to={`/players/${player.id}`}>
            <h2>{player.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
