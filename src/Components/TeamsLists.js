import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamsLists({ teams }) {
  console.log(teams);
  return (
    <div>
      <h3>The Teams Of The League</h3>

      {teams.map((team) => (
        <div className="teams" key={team.id}>
          <Link to={`/teams/${team.id}`}>
            <h2>{team.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
