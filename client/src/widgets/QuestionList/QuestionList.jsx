import React, { useEffect, useState } from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import QuestionApi from '../../entities/Question/Api/QuestionApi';
import { useParams } from 'react-router';
import { AnswersApi } from '../../entities/answers/api/answerApi';

export default function QuestionList({ gameData }) {
  const [questions, setQuestions] = useState([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const { data } = await QuestionApi.getAllGamesByTheme(id);
        setQuestions(data);
      } catch (error) {
        console.log(error);
      }
    };
    getQuestions();
  }, []);


  return (
    <>
      {questions.length ? (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          questions={questions}
          gameData={gameData}
        />
      ) : (
        <h1>Загрузка вопросов...</h1>
      )}
    </>
  );
}
