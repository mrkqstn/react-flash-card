import React, { useEffect, useState } from 'react';

import GameeApi from '../../entities/Game/api/GameApi';
import { useParams } from 'react-router';
import GameStatsCard from '../../widgets/GameStatsCard/GameStatsCard';

export default function GameStatisticPage() {

  const [gameStat, setGameWithThemeStat] = useState([]);



  useEffect(() => {
    const getTodos = async () => {
      try {

        const { data: allGamesWithTeme } = await GameeApi.getAllGames();

        setGameWithThemeStat(allGamesWithTeme);
      } catch (error) {
        console.log(error);
      }
    };
    getTodos();
  }, []);

  return (
    <>
      <h1>Статистика Игр</h1>
      {gameStat.map((game) => (
        <GameStatsCard key={game.id} game={game}/>
      ))}
    </>
  );
}
