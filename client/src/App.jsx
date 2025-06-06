import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './app/layout/Layout';
import GameStatisticPage from './pages/GameStaticticPage/GameStatisticPage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemePage from './pages/ThemePage/ThemePage';


function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/stats' element={<GameStatisticPage />} />
        <Route path='/questions' element={<QuestionPage />} />
        <Route path ='/themes' element={<ThemePage />}/> 
      </Routes>
    </>
  );
}

export default App;
