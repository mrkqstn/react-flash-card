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
          const fullGataGame = { ...gameData, theme_id: id, score: newScore };
          const { data: newGame } = await GameApi.createGame(fullGataGame);
          if (!newGame) {
            alert(`произошла ошибка при записи результатов игры`);
          }
          navigate(`/stats`, { state: fullGataGame });
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
    <Card
      style={{
        width: '18rem',
        margin: '0 auto',
        border: 'none',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        marginTop: '80px',
      }}
    >
      <Card.Body style={{ padding: '20px' }}>
        <Card.Title
          style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '15px',
            color: '#4e73df',
          }}
        >
          Вопрос {currentQuestion} из {totalQuestions}
        </Card.Title>
        <Card.Text
          style={{
            fontSize: '1.1rem',
            marginBottom: '20px',
            color: '#4e73df',
            fontWeight: 'bold',
          }}
        >
          {question.question}
        </Card.Text>

        <div style={{ marginBottom: '15px' }}>
          {answers.map((answer) => (
            <Button
              key={answer.id}
              style={{
                width: '100%',
                padding: '12px 24px',
                margin: '8px 0',
                backgroundColor:
                  selectedAnswerId === null
                    ? 'transparent'
                    : answer.id === selectedAnswerId
                    ? isCorrectAnswer
                      ? '#28a745'
                      : '#dc3545'
                    : 'transparent',
                color:
                  selectedAnswerId === null
                    ? '#4e73df'
                    : answer.id === selectedAnswerId
                    ? '#fff'
                    : '#6c757d',
                border:
                  selectedAnswerId === null
                    ? '1px solid #4e73df'
                    : answer.id === selectedAnswerId
                    ? 'none'
                    : '1px solid #dee2e6',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                textTransform: 'none',
                letterSpacing: '0.3px',
                boxShadow:
                  selectedAnswerId === answer.id
                    ? '0 4px 6px rgba(0,0,0,0.1)'
                    : 'none',
                transition: 'all 0.3s ease',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ':hover': {
                  transform:
                    selectedAnswerId === null ? 'translateY(-2px)' : 'none',
                  boxShadow:
                    selectedAnswerId === null
                      ? '0 4px 8px rgba(0,0,0,0.1)'
                      : 'none',
                },
              }}
              onClick={() => handleAnswerSelect(answer.id)}
            >
              {answer.var_on_answer}
            </Button>
          ))}
        </div>

        <Button
          style={{
            width: '100%',
            padding: '12px 24px',
            marginTop: '10px',
            backgroundColor: '#4e73df',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            textTransform: 'none',
            letterSpacing: '0.5px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ':hover': {
              backgroundColor: '#2e59d9',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
            },
          }}
          onClick={() => onAnswerHandler()}
        >
          Следующий вопрос
        </Button>
      </Card.Body>
    </Card>
  );
}
