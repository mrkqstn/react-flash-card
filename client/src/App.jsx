import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './app/layout/Layout';
import GameStatisticPage from './pages/GameStaticticPage/GameStatisticPage';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/stats' element={<GameStatisticPage />} />
      </Routes>
    </>
  );
}

export default App;
