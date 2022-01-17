import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamDeatail({ team }) {
  return (
    <div>
      <h1>Team Info</h1>

      {team.players.map((person) => (
        <div key={person.id}>
          <Link to={`/players/${person.id}`}>
            <h2>{person.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
