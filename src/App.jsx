import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { QuestionProvider } from './Context';
import useFetch from './CustomHooks/useFetch';
import useIncrement from './CustomHooks/useIncrement';
import GameOver from './Pages/ResultPage/GameOver';
import Home from './Pages/HomePage/Home';
import QuizPage from './Pages/QuizPage/QuizPage';

export default function App() {
  const [quiz, setQuiz] = useFetch();
  const [pageNumber, setPageNumber] = useIncrement(0);
  const [ansTracker, setAnsTracker] = useState({ passed: 0, failed: 0 });

  return (
    <div className="App">
      <QuestionProvider
        value={{
          quiz,
          setQuiz,
          pageNumber,
          setPageNumber,
          ansTracker,
          setAnsTracker,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/quiz/:id" element={<QuizPage />} />
            <Route path="/result" element={<GameOver />} />
          </Routes>
        </BrowserRouter>
      </QuestionProvider>
    </div>
  );
}
