import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import LoadingBubble from '../components/common/LoadingBubble';
import NavBar from '../components/common/NavBar';
import { calculateScore } from '../utils/scoreCalculator';
import '../styles/pages/resultPage.scss';

function ResultPage() {
  const { state } = useLocation();
  const { questions, userAnswers } = state || {};
  
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [score, setScore] = useState(0);
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    if(questions && userAnswers) {
      const sc = calculateScore(questions, userAnswers);
      setScore(sc);
      if(sc >=7) {
        const successBG = ['fond_reussiteG1.jpg','fond_reussiteG2.jpg','fond_reussiteG3.jpg'];
        setBgImage(successBG[Math.floor(Math.random()*successBG.length)]);
      } else {
        const failBG = ['fond_echecP1.jpg','fond_echecP2.jpg','fond_echecP3.jpg'];
        setBgImage(failBG[Math.floor(Math.random()*failBG.length)]);
      }
    }
  }, [questions, userAnswers]);

  function handleComplete() {
    setTimeout(()=> setShowContent(true), 1000);
    setTimeout(()=> setLoading(false), 1100);
  }

  return (
    <div className="result-page" style={{backgroundImage:bgImage? `url(${require(`../assets/images/${bgImage}`)})` : 'none'}}>
      {loading && <LoadingBubble color="green" onComplete={handleComplete}/>}
      <NavBar/>
      {showContent && (
        <div className="result-content">
          <div className="white-bubble-result">
            <h2>Votre résultat : {score}/10</h2>
            {score < 7 ? (
              <>
                <p>Encore des choses à revoir</p>
                <p><Link to="/" className="review-link">Revenir à la page principale</Link></p>
              </>
            ):(
              <>
                <p>Bravo vous avez bien compris les explications, n'hésitez pas à trouver plus d’info sur l’actualité des océans sur le site : <a href="https://www.raceforwater.org/fr/" target="_blank" rel="noreferrer">raceforwater.org</a></p>
                <div className="small-bubble">
                  Nous vous invitons à recommencer, il y a d'autres questions, vous pouvez vous améliorer ! :)
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultPage;
