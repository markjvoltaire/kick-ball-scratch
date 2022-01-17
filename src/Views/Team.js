import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamDetail from '../Components/TeamDeatail';
import { fetchTeamById } from '../services/Team/team';

export default function Team() {
  const [team, setTeam] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(params.id);
      setTeam(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <TeamDetail team={team} />
    </div>
  );
}
