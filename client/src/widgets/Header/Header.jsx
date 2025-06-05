import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';


export default function Header() {
  const navigate = useNavigate();


  return (
    <header className={styles.header}>
      <NavLink
        to='/'
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
      >
        Главная 
      </NavLink>

        <NavLink
          to='/app/articles'
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          Мои посты
        </NavLink>

      {user.status === 'logged' && <div>{user.data?.name}</div>}


    </header>
  );
}
