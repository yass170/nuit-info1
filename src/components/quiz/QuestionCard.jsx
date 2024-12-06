import React, { useState } from 'react';
import './questionCard.scss';

function QuestionCard({ question, qIndex, total, userSelection, onChange, onValidate, onSkip }) {
  const [localSelection, setLocalSelection] = useState(userSelection);

  function toggleAnswer(idx) {
    let newSel = [...localSelection];
    if(newSel.includes(idx)) {
      newSel = newSel.filter(x=>x!==idx);
    } else {
      newSel.push(idx);
    }
    setLocalSelection(newSel);
    onChange(question.id, newSel);
  }

  return (
    <div className="question-card">
      <div className="white-bubble">
        <h3>{question.question}</h3>
        <div className="answers">
          {question.answers.map((ans,i)=>(
            <label key={i} className="answer-label">
              <input 
                type="checkbox" 
                checked={localSelection.includes(i)} 
                onChange={()=>toggleAnswer(i)}/> {ans}
            </label>
          ))}
        </div>
        <div className="buttons">
          <button className="validate-btn" onClick={onValidate}>Valider</button>
          <button className="skip-btn" onClick={onSkip}>Passer</button>
        </div>
        <div className="progress-indicator">
          {qIndex+1}/{total}
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
