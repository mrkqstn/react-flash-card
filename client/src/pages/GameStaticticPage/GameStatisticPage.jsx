import React, { useEffect, useState } from 'react';

import GameeApi from '../../entities/Game/api/GameApi';
import { useParams } from 'react-router';

export default function GameStatisticPage() {
  //   const [gameStat, setGameStat] = useState([]);

  const [gameStat, setGameWithThemeStat] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getTodos = async () => {
      try {
        // const { data } = await GameeApi.getAllGames();
        // console.log(' response:', data);
        // setGameStat(data);
        const { data: allGamesWithTeme } = await GameeApi.getAllGamesByTheme(
          id
        );
        console.log(' response:', allGamesWithTeme);
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
  {gameStat.map((game) => )}
  </>
);
}
