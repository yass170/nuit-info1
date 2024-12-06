import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EnSavoirPlusPage from './pages/EnSavoirPlusPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/en-savoir-plus/:type/:id" element={<EnSavoirPlusPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/quiz/result" element={<ResultPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
