import React, { useEffect, useState } from 'react';
import TeamsLists from '../Components/TeamsLists';
import { fetchTeams } from '../services/Teams/teams';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();

      setTeams(data);
      setLoading(false);
    };

    fetchData();
  }, []);
  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="teams">
      <TeamsLists teams={teams} />
    </div>
  );
}
