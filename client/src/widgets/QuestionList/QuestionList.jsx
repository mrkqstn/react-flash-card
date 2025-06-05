import React, { useEffect, useState } from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import QuestionApi from '../../entities/Question/Api/QuestionApi';

export default function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const { data } = await QuestionApi.getAllGamesByTheme()
        setQuestions(data);
      } catch (error) {
        console.log(error);
      }
    }
    getQuestions();
  }, []);

  const handleAnswerSelect = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Викторина завершена! Ваш счет: ${score}/${questions.length}`);
    }
  };

  return (
    <>
      {questions.length ? (
        <QuestionCard 
          question={questions[currentQuestionIndex]} 
          onAnswerSelect={handleAnswerSelect}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />
      ) : (
        <h1>Загрузка вопросов...</h1>
      )}
    </>
  );
}