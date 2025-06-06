import React, { useEffect, useState } from 'react';
import GameApi from '../../entities/Game/api/GameApi';
import styles from './GameStatsCard.module.css';

export default function GameStatsCard({ game }) {


  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Тема: {game.theme?.theme_name}</h2>
      <p className={styles.text}>ID Игры: {game.id}</p>
      <p className={styles.text}>Очки: {game.score}</p>
      <p className={styles.text}>Игрок: {game.user_name}</p>
    </div>
  );
}
