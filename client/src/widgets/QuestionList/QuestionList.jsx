import React, { useEffect, useState } from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import QuestionApi from '../../entities/Question/Api/QuestionApi';

const mokquestion = [
  {
    question: 'Столица Австралии?',
    theme_id: 1,
  },
  {
    question: 'Самая длинная река в мире?',
    theme_id: 1,
  },
  {
    question: 'На каком материке находится Египет?',
    theme_id: 1,
  },
  {
    question: 'Какая страна имеет наибольшее население?',
    theme_id: 1,
  },
];

const mokanswers = [
  {
    var_on_answer: 'Сидней',
    question_id: 1,
    right: false,
  },
  {
    var_on_answer: 'Канберра',
    question_id: 1,
    right: true,
  },
  {
    var_on_answer: 'Мельбурн',
    question_id: 1,
    right: false,
  },
  {
    var_on_answer: 'Брисбен',
    question_id: 1,
    right: false,
  },
];
export default function QuestionList() {
  const [questions, setQuestions] = useState(mokquestion);
  const [answers, setAnswers] = useState(mokanswers);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        // const { data } = await QuestionApi.getAllGamesByTheme(1);
        // setQuestions(data);
      } catch (error) {
        console.log(error);
      }
    };
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
          answers={answers}
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
