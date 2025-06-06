import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { useNavigate } from 'react-router';

export default function CardTheme({ theme, gameData }) {
  
  console.log('CardTheme', gameData);
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem', margin: '0 auto' }}>
      <Card.Body>
        <Button
          variant='primary'
          style={{ marginTop: '10px' }}
          onClick={() =>
            navigate(`/questions/${theme.id}`, { state: gameData })
          }
        >
          {theme.theme_name}
        </Button>
      </Card.Body>
    </Card>
  );
}
