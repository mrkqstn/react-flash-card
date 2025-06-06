import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function QuestionCard({ question, onAnswerSelect, currentQuestion, totalQuestions }) {
  return (
    <Card style={{ width: "18rem", margin: "0 auto" }}>
      <Card.Body>
        <Card.Title>Вопрос {currentQuestion} из {totalQuestions}</Card.Title>
        <Card.Text>{question.text}</Card.Text>
        
        <div className="answers">
          {question.answers.map((answer) => (
            <Button 
              key={answer.id}
              variant="outline-primary"
              style={{ display: "block", margin: "5px 0", width: "100%" }}
              onClick={() => onAnswerSelect(answer.isCorrect)}
            >
              {answer.text}
            </Button>
          ))}
        </div>

        <Button 
          variant="primary" 
          style={{ marginTop: "10px" }}
          onClick={() => onAnswerSelect(false)} // Пропускаем вопрос без ответа
        >
          Следующий вопрос
        </Button>
      </Card.Body>
    </Card>
  );
}