import React, { useState, useEffect } from 'react';
import LoadingBubble from '../components/common/LoadingBubble';
import NavBar from '../components/common/NavBar';
import QuizInfoBubble from '../components/quiz/QuizInfoBubble';
import QuestionCard from '../components/quiz/QuestionCard';
import { selectRandomQuestions } from '../utils/randomSelection';
import allQuestions from '../data/questions.json';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/quizPage.scss';

function QuizPage() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const selected = selectRandomQuestions(allQuestions, 10);
    setQuestions(selected);
  }, []);

  function handleComplete() {
    setTimeout(()=> setShowContent(true), 1000);
    setTimeout(()=> setLoading(false), 1100);
  }

  function handleAnswerChange(questionId, answerIndexes) {
    setUserAnswers({...userAnswers, [questionId]: answerIndexes});
  }

  function handleValidate() {
    if(currentQIndex < questions.length-1) {
      setCurrentQIndex(currentQIndex+1);
    } else {
      navigate('/quiz/result', {state:{questions, userAnswers}});
    }
  }

  function handleSkip() {
    if(currentQIndex < questions.length-1) {
      setCurrentQIndex(currentQIndex+1);
    } else {
      navigate('/quiz/result', {state:{questions, userAnswers}});
    }
  }

  const currentQuestion = questions[currentQIndex];

  return (
    <div className="quiz-page">
      {loading && <LoadingBubble color="green" onComplete={handleComplete}/>}
      <NavBar/>
      {showContent && currentQuestion && (
        <div className="quiz-content">
          <QuizInfoBubble/>
          <QuestionCard 
            question={currentQuestion}
            qIndex={currentQIndex}
            total={questions.length}
            userSelection={userAnswers[currentQuestion.id]||[]}
            onChange={handleAnswerChange}
            onValidate={handleValidate}
            onSkip={handleSkip}
          />
        </div>
      )}
    </div>
  );
}

export default QuizPage;
