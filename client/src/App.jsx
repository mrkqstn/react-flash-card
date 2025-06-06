import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './app/layout/Layout';
import GameStatisticPage from './pages/GameStaticticPage/GameStatisticPage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemePage from './pages/ThemePage/ThemePage';
import MAinPage from './pages/MainPage/MainPage';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/start' element={<MAinPage />} />
          <Route path='/stats' element={<GameStatisticPage />} />
          <Route path='/questions/:id' element={<QuestionPage />} />
          <Route path='/themes' element={<ThemePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
