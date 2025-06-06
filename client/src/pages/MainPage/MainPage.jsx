import React, { useState } from 'react';
import GameApi from '../../entities/Game/api/GameApi';

import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function MAinPage() {
  const [gameData, setuGameData] = useState({ user_name: '' });

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    navigate(`/themes`, { state: gameData });
  }

  function inputsHandler(e) {
    setuGameData((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  }
  console.log(gameData);

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginTop: '80px',
      }}
    >
      <form onSubmit={submitHandler} style={{ width: '100%' }}>
        <Form.Group controlId='userName' style={{ marginBottom: '20px' }}>
          <Form.Control
            type='text'
            name='user_name'
            placeholder='Введите ваше имя'
            value={gameData.user_name}
            onChange={inputsHandler}
            style={{
              width: '100%',
              padding: '14px 16px',
              fontSize: '1rem',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              ':focus': {
                borderColor: '#4e73df',
                boxShadow: '0 0 0 3px rgba(78, 115, 223, 0.25)',
                outline: 'none',
              },
            }}
          />
        </Form.Group>

        <Button
          type='submit'
          style={{
            width: '100%',
            padding: '14px 24px',
            backgroundColor: '#4e73df',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            color: 'white',
            textTransform: 'none',
            letterSpacing: '0.5px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: '#2e59d9',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
            },
          }}
        >
          Начать игру
        </Button>
      </form>
    </div>
  );
}
