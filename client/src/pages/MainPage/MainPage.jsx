import React, { useState } from 'react';
import GameApi from '../../entities/Game/api/GameApi';

import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function MAinPage() {
  const [gameData, setuGameData] = useState({ user_name: '' });

  const navigate = useNavigate()

  function submitHandler(e) {
    e.preventDefault();
    navigate(`/themes`, { state: gameData })
  }

  function inputsHandler(e) {
    setuGameData((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  }
  console.log(gameData)

  return (
    <>
      <form onSubmit={submitHandler}>
        <Form.Group controlId='userName'>
          <Form.Control
            type='text'
            name='user_name'
            placeholder='Введи ваше имя'
            value={gameData.user_name}
            onChange={inputsHandler}
          />
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-2' >
          Начать игру
        </Button>
      </form>
    </>
  );
}
