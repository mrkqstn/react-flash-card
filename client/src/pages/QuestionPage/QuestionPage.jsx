import React from 'react';
import QuestionList from '../../widgets/QuestionList/QuestionList';
import { useLocation } from 'react-router';

export default function QuestionPage() {
  const location = useLocation();
  const gameData = location.state;
  console.log('QuestionPage', gameData);
  return <QuestionList gameData={gameData} />;
}
