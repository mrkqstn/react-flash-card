import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { useNavigate } from 'react-router';

export default function CardTheme({ theme, gameData }) {
  
  console.log('CardTheme', gameData);
  const navigate = useNavigate();

  // return (
  //   <Card style={{ width: '18rem', margin: '0 auto' }}>
  //     <Card.Body>
  //       <Button variant='primary' style={{ 
  //         marginTop: '10px',
  //         justifyContent: 'center',
  //         }} onClick={() => navigate(`/questions/${theme.id}`)}>
  //         {theme.theme_name}
  //       </Button>
  //     </Card.Body>
  //   </Card>
  // );
  return (
  <Card style={{ 
    width: '18rem', 
    margin: '0 auto',
    border: 'none',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  }}>
    <Card.Body style={{ padding: '1.5rem' }}>
      <Button 
        variant="primary" 
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
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
          }
        }} 
        onClick={() => navigate(`/questions/${theme.id}`)}
      >
        {theme.theme_name}
      </Button>
    </Card.Body>
  </Card>
);
}
