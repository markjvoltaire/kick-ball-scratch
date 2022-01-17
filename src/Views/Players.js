import React, { useEffect, useState } from 'react';
import PlayersLists from '../Components/PlayersLists';
import { fetchPlayers } from '../services/Players/players';

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlayers = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
      setLoading(false);
    };
    getPlayers();
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <PlayersLists players={players} />
    </div>
  );
}
