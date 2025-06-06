import React, { useEffect, useState } from 'react';

import GameeApi from '../../entities/Game/api/GameApi';
import { useLocation, useParams } from 'react-router';
import GameStatsCard from '../../widgets/GameStatsCard/GameStatsCard';

export default function GameStatisticPage() {
  const [gameStat, setGameWithThemeStat] = useState([]);
  const location = useLocation();
  const gameData = location.state;

  console.log('------------------END', gameData);

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
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Заголовок в стиле ваших кнопок */}
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 600,
          color: '#4e73df',
          marginBottom: '30px',
          textAlign: 'center',
          textTransform: 'none',
          letterSpacing: '0.5px',
          paddingBottom: '10px',
          borderBottom: '2px solid #4e73df',
          display: 'inline-block',
          marginLeft: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        Статистика игр
      </h1>

      {/* Сетка карточек с анимациями */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '25px',
          padding: '15px',
        }}
      >
        {gameStat.map((game) => (
          <div
            key={game.id}
            style={{
              transition: 'all 0.3s ease',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              },
            }}
          >
            <GameStatsCard game={game} />
          </div>
        ))}
      </div>
    </div>
  );
}
