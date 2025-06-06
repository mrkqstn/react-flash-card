import React from 'react';
import { NavLink } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function Header({ user }) {
  const navigate = useNavigate();

  return (
    <Navbar bg='primary' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand as={NavLink} to='/themes'>
          Главная
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to='/stats'>
              Статистика
            </Nav.Link>
          </Nav>
          {user?.status === 'logged' && (
            <Navbar.Text className='text-white'>
              Привет, {user.data?.name}
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}