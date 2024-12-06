import React from 'react';
import infoIcon from '../../assets/svg/icon_info.svg';
import './quizInfoBubble.scss';

function QuizInfoBubble() {
  return (
    <div className="quiz-info-bubble">
      <img src={infoIcon} alt="info"/>
      <p>Cochez une ou plusieurs cases pour répondre, nous vous conseillons de bien lire l'intégralité du site pour répondre avec aisance</p>
    </div>
  );
}

export default QuizInfoBubble;
