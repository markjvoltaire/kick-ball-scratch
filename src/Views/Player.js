import React, { useEffect, useState } from 'react';
import PlayerDetail from '../Components/PlayerDetail';
import { fetchPlayerById } from '../services/Player/player';
import { useParams } from 'react-router-dom';

export default function Player() {
  const [player, setPlayer] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerById(params.id);
      setPlayer(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  if (loading) {
    return <h2>Loading..</h2>;
  }

  return (
    <div>
      <PlayerDetail player={player} />
    </div>
  );
}
