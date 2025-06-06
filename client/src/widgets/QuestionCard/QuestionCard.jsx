import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AnswersApi } from '../../entities/answers/api/answerApi';
import { useNavigate, useParams } from 'react-router';
import GameApi from '../../entities/Game/api/GameApi';

export default function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  questions,
  gameData,
}) {
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [checkCountQuestion, setCheckCountQuestion] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await AnswersApi.getAllAnswers(question.id);
        setAnswers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [question]);

  const handleAnswerSelect = async (id) => {
    try {
      const { data } = await AnswersApi.fullAnswers(id);
      setSelectedAnswerId(id);
      setIsCorrectAnswer(data[0].right);

      if (data[0].right) {
        const newScore = score + 1;
        setScore(newScore);
        if (currentQuestionIndex === questions.length - 1) {
          alert(
            `Викторина завершена! Ваш счет: ${newScore}/${questions.length}`
          );
          const fullGataGame = { ...gameData, theme_id: id, score: newScore }
          const { data: newGame } = await GameApi.createGame(fullGataGame);
          if( !newGame ) {
            alert(
            `произошла ошибка при записи результатов игры`
          );
          }
          navigate(`/stats`, { state: fullGataGame })
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onAnswerHandler = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCheckCountQuestion((prev) => prev + 1);
    }
  };

  console.log({ ...gameData, theme_id: id });

  return (
    <Card style={{ width: '18rem', margin: '0 auto' }}>
      <Card.Body>
        <Card.Title>
          Вопрос {currentQuestion} из {totalQuestions}
        </Card.Title>
        <Card.Text>{question.question}</Card.Text>

        <div className='answers'>
          {answers.map((answer) => (
            <Button
              key={answer.id}
              variant={
                selectedAnswerId === null
                  ? 'outline-primary'
                  : answer.id === selectedAnswerId
                  ? isCorrectAnswer
                    ? 'success'
                    : 'danger'
                  : 'outline-secondary'
              }
              style={{ display: 'block', margin: '5px 0', width: '100%' }}
              onClick={() => handleAnswerSelect(answer.id)}
            >
              {answer.var_on_answer}
            </Button>
          ))}
        </div>

        <Button
          variant='primary'
          style={{ marginTop: '10px' }}
          onClick={() => onAnswerHandler()} // Пропускаем вопрос без ответа
        >
          Следующий вопрос
        </Button>
      </Card.Body>
    </Card>
  );
}
